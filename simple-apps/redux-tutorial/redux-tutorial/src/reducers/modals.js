import produce from "immer";
import ActionEnum from '../constants/action-enum';

export const modals = produce((state, action) => {
    switch (action.type) {
        case ActionEnum.CAR_DETAIL_MODAL_CAR_CHANGED:
            state.carDetailModal.car = action.payload;
            return;
        case ActionEnum.CAR_DETAIL_MODAL_STATE_CHANGED:
            state.carDetailModal.isOpen = action.payload;
            return;
        case ActionEnum.WARNING_MODAL_STATE_CHANGED:
            state.warningModal.isOpen = action.payload;
            return;
        default:
    }
}, {});
