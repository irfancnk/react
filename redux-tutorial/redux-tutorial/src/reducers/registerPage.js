import ActionEnum from '../constants/action-enum';

export const registerPage = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionEnum.REGISTER_PAGE_REQUEST_STATUS_CHANGED:
            state.requestInProgress = action.payload;
            return state;
        default:
            return state;
    }
}
