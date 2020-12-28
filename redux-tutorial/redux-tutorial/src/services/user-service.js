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

export {
    userLoginRequest,
    userRegisterRequest
};