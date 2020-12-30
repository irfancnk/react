import ActionEnum from '../constants/action-enum';

export const loginPage = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionEnum.LOGIN_PAGE_REQUEST_STATUS_CHANGED:
            state.requestInProgress = action.payload;
            return state;
        default:
            return state;
    }
}
