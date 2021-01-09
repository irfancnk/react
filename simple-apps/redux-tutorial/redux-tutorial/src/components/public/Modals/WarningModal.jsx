// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
// MODULES
import PrimaryButton from '../../common/PrimaryButton';
import Modal from '../../common/Modal';
import { warningModalStateChanged } from '../../../actions/actions';
// STYLES

class WarningModal extends Component {

        closeCallback() {
            this.props.dispatcher(warningModalStateChanged(false));
        }

        render() {
            return (
                <Modal width={20} height={10}>
                    <div className="container-fluid h-100 m-0 p-0">
                        <div className="row h-100 m-0 p-0">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-3">
                                <p className="text-left">
                                    The password or email that you've entered is incorrect. <span className="login-text-label">Forgotten password?</span>
                            </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-3">
                                <div className="d-flex h-100 w-100 align-items-center justify-content-center p-2">
                                    <PrimaryButton onClick={() => this.closeCallback()}>
                                        Close{' '}&#10005;
                                </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            );
        }
    }


const mapStateToProps = (state) => ({
    warningModal: state.modals.warningModal
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WarningModal);
