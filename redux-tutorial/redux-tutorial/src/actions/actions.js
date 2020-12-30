import ActionEnum from '../constants/action-enum';

export const applicationUserLogin = (value) => ({
    type: ActionEnum.APPLICATION_USER_LOGIN,
    payload: value
});

export const applicationUserLogout = (value) => ({
    type: ActionEnum.APPLICATION_USER_LOGOUT,
    payload: value
});

export const loginPageRequestStatusChanged = (value) => ({
    type: ActionEnum.LOGIN_PAGE_REQUEST_STATUS_CHANGED,
    payload: value
});

export const registerPageRequestStatusChanged = (value) => ({
    type: ActionEnum.REGISTER_PAGE_REQUEST_STATUS_CHANGED,
    payload: value
});


export const mainPageRequestStatusChanged = (value) => ({
    type: ActionEnum.MAIN_PAGE_REQUEST_STATUS_CHANGED,
    payload: value
});

export const mainPageCarListChanged = (value) => ({
    type: ActionEnum.MAIN_PAGE_CAR_LIST_CHANGED,
    payload: value
});

export const carDetailModalStateChanged = (value) => ({
    type: ActionEnum.CAR_DETAIL_MODAL_STATE_CHANGED,
    payload: value
});

export const carDetailModalCarChanged = (value) => ({
    type: ActionEnum.CAR_DETAIL_MODAL_CAR_CHANGED,
    payload: value
});

export const warningModalStateChanged = (value) => ({
    type: ActionEnum.WARNING_MODAL_STATE_CHANGED,
    payload: value
});
