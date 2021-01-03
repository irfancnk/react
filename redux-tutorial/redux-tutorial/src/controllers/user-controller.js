// PACKAGES
import Cookies from 'js-cookie';
// MODULES
import { userLoginRequest } from '../services/user-service';
import { userRegisterRequest } from '../services/user-service';
import {
    loginPageRequestStatusChanged,
    applicationUserLogin,
    registerPageRequestStatusChanged,
    applicationUserLogout,
    warningModalStateChanged
} from '../actions/actions';

function recoverAuth(state) {
    var token = Cookies.get('user-token');
    if (token) {
        state.applicationUser.isAuthenticated = true;
        state.applicationUser.userEmail = token;
    }
    return state;
}

function userLogin(email, password) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(loginPageRequestStatusChanged(true));
            userLoginRequest(email, password)
            .then(function (loginResult) {
                let in30Minutes = 1 / 48;
                Cookies.remove('user-token');
                Cookies.set('user-token', loginResult.email, { expires: in30Minutes });
                dispatch(applicationUserLogin(loginResult.email));
                console.log(loginResult);
            }, function (loginError) {
                console.warn(loginError);
                dispatch(warningModalStateChanged(true));
            })
            .finally(function () {
                dispatch(loginPageRequestStatusChanged(false));
                return resolve();
            });
        });
    };
}

function userRegister(email, name, password) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(registerPageRequestStatusChanged(true));
            userRegisterRequest(email, name, password)
            .then(function (registerResult) {
                let in30Minutes = 1 / 48;
                Cookies.remove('user-token');
                Cookies.set('user-token', registerResult.email, { expires: in30Minutes });
                dispatch(applicationUserLogin(registerResult.email));
            }, function (registerError) {
                console.warn(registerError);
            })
            .finally(function () {
                dispatch(registerPageRequestStatusChanged(false));
                return resolve();
            });
        });
    };
}

function userLogout() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            Cookies.remove('user-token');
            dispatch(applicationUserLogout());
        });
    };

}

export {
    recoverAuth,
    userLogin,
    userRegister,
    userLogout
};