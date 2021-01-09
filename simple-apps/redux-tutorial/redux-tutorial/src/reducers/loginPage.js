import produce from "immer";
import ActionEnum from '../constants/action-enum';

export const loginPage = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.LOGIN_PAGE_REQUEST_STATUS_CHANGED:
            state.requestInProgress = action.payload;            
            return;
        default:
    }
}, {});