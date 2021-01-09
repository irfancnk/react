// PACKAGES
import { toast } from "react-toastify";
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

function likeContent() {
    return function (dispatch) {
        // MAKE API CALL THEN SHOW NOTIFICATION
        // LOGIC STORED HERE
        toast.success("Image added to your favourites.");
    }
}

export {
    getCarList,
    likeContent
};