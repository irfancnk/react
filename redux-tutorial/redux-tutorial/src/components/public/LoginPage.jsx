// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// MODULES
// STYLES

class LoginPage extends Component {
    
    loginPage() {
        return (
            <span>
                You need to login first
            </span>
        );
    }

    redirection() {
        return (
            <Redirect to='/' />
        );
    }

    authenticationCheck(isAuthenticated) {
        if (isAuthenticated) {
            return this.redirection();
        } else {
            return this.loginPage();
        }
    }

    render() {
        return this.authenticationCheck(this.props.applicationUser.isAuthenticated);
    }
}

const mapStateToProps = (state) => ({
    applicationUser: state.applicationUser
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
