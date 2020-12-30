// PACKAGES
// MODULES
import { getCarListRequest } from '../services/car-service';
import {
    mainPageCarListChanged,
    mainPageRequestStatusChanged
} from '../actions/actions';

function getCarList() {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            dispatch(mainPageRequestStatusChanged(true));
            let carListRequestPromise = getCarListRequest();
            carListRequestPromise.then(function (result) {
                dispatch(mainPageCarListChanged(result));
                return resolve(result);
            }, function (error) {
                return reject(error);
            })
            .finally(function () {
                dispatch(mainPageRequestStatusChanged(false));
            })
        });
    };
}

export {
    getCarList
};