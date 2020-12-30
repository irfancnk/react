// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
// MODULES
import PrimaryButton from '../common/PrimaryButton';
import SecondaryDropdown from '../common/SecondaryDropdown';
import { userLogout } from '../../controllers/user-controller';

// STYLES
import './MainPage.css'

class MainPage extends Component {

    componentDidMount() {
        console.log("Main");
    }

    onLogoutCallback() {
        this.props.dispatcher(userLogout())
    }

    render() {
        return (
            <div className="main-container container-fluid h-100 m-0 p-0">
                <div className="main-row row h-100 m-0 p-0">
                    <div className="main-column-header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                        <div className="d-flex flex-row-reverse h-100 w-100 align-items-center px-2">
                            <PrimaryButton onClick={() => this.onLogoutCallback()}>Logout</PrimaryButton>
                            <div className="px-1"></div>
                            <SecondaryDropdown>{this.props.applicationUser.userEmail}</SecondaryDropdown>
                        </div>

                    </div>
                    <div className="main-column-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="d-flex h-100 w-100 align-items-center justify-content-center p-2">
                        </div>
                    </div>
                    <div className="main-column-footer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    applicationUser: state.applicationUser,
    mainPage: state.mainPage
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
