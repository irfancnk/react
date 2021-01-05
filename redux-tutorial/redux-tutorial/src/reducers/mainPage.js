import produce from "immer";
import ActionEnum from '../constants/action-enum';

export const mainPage = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.MAIN_PAGE_REQUEST_STATUS_CHANGED:
            state.requestInProgress = action.payload;
            return;
        case ActionEnum.MAIN_PAGE_CAR_LIST_CHANGED:
            state.carList = action.payload;            
            return;
        default:
    }
}, {});

