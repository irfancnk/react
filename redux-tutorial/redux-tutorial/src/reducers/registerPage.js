import produce from "immer";
import ActionEnum from '../constants/action-enum';

export const registerPage = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.REGISTER_PAGE_REQUEST_STATUS_CHANGED:
            state.requestInProgress = action.payload;
            return;
        default:
    }
}, {});
