// PACKAGES
import axios from 'axios';
// MODULES
import getProxy from './proxy';


function userLoginRequest(login, password) {
    return new Promise(function (resolve, reject) {
        let loginPromise = axios.post(
            getProxy() + "/users/login",
            { login, password }
        );
        loginPromise.then(function ({data}) {
            console.log(data);
            return resolve(data)
        }, function (error) {
            return reject(error)
        });
    });
}

function userRegisterRequest(name, password, email) {
    return new Promise(function (resolve, reject) {
        let registerPromise = axios.post(
            getProxy() + "/users/login",
            { name, email, password }
        );
        registerPromise.then(function ({data}) {
            console.log(data);
            return resolve(data)
        }, function (error) {
            return reject(error)
        });
    });
}


function setAuthenticationToken(token) {
    axios.defaults.timeout = 15000;
    if (token) {
        axios.defaults.headers.common.Authorization = token;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}


export {
    setAuthenticationToken,
    userLoginRequest,
    userRegisterRequest
};