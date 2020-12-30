// PACKAGES
import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
// MODULES
import CarModal from '../private/Modals/CarModal';
import WarningModal from '../public/Modals/WarningModal';
// STYLES

class ModalContainer extends Component {

    activeModals(modals) {
        var modalList = [];
        var componentKey = 0;
        if (modals.carDetailModal.isOpen) {
            modalList.push(
                <CarModal key={componentKey}/>
            );
            componentKey += 1;
        }
        if (modals.warningModal.isOpen) {
            modalList.push(
                <WarningModal key={componentKey}/>
            );
            componentKey += 1;
        }
        return modalList;
    }

    render() {
        return this.activeModals(this.props.modals);
    }
}


const mapStateToProps = (state) => ({
    modals: state.modals
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
