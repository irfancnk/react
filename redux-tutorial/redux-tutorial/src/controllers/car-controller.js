// PACKAGES
// MODULES
import { getCarListRequest } from '../services/car-service';

function getCarList() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            let carListRequestPromise = getCarListRequest();
            carListRequestPromise.then(function (result) {
                return resolve(result);
            }, function (error) {
                return reject(error);
            });
        });
    };
}

export {
    getCarList
};