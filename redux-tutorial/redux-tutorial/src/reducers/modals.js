import ActionEnum from '../constants/action-enum';

export const modals = (state = {}, action) => {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ActionEnum.CAR_DETAIL_MODAL_CAR_CHANGED:
            state.carDetailModal.car = action.payload;
            return state;
        case ActionEnum.CAR_DETAIL_MODAL_STATE_CHANGED:
            state.carDetailModal.isOpen = action.payload;
            return state;
        case ActionEnum.WARNING_MODAL_STATE_CHANGED:
            state.warningModal.isOpen = action.payload;
            return state;
        default:
            return state;
    }
}

