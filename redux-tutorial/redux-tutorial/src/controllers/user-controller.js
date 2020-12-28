// PACKAGES
import Cookies from 'js-cookie';
// MODULES

function recoverAuth(state) {
    var token = Cookies.get('token');
    if (token) {
        state.applicationUser.isAuthenticated = true;
        state.applicationUser.email = "email";
    }
    return state;
}

function userLogin(params) {
    
}

function userRegister(params) {
    
}

function userLogout(params) {
    
}

export {
    recoverAuth,
    userLogin,
    userRegister,
    userLogout
};