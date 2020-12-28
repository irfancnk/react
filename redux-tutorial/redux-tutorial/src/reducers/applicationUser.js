import ActionEnum from '../constants/action-enum';

export const applicationUser = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionEnum.APPLICATION_USER_LOGIN:
            return action.payload;
        case ActionEnum.APPLICATION_USER_LOGOUT:
            return action.payload;
        default:
            return state;
    }
}
