import ActionEnum from '../constants/action-enum';

export const applicationUser = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionEnum.APPLICATION_USER_LOGIN:
            state.userEmail = action.payload;
            state.isAuthenticated = true;
            console.log(state);
            return state;
        case ActionEnum.APPLICATION_USER_LOGOUT:
            state.userEmail = "";
            state.isAuthenticated = false;
            return state;
        default:
            return state;
    }
}
