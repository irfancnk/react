// PACKAGES
import axios from 'axios';
// MODULES
import getProxy from './proxy';


function getCarListRequest(login, password) {
    return new Promise(function (resolve, reject) {
        let carListPromise = axios.get(
            getProxy() + "/data/cars"
        );
        carListPromise.then(function ({data}) {
            return resolve(data)
        }, function (error) {
            return reject(error)
        });
    });
}



export {
    getCarListRequest
};