// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// MODULES
// STYLES

class RegisterPage extends Component {
    
    registerPage() {
        return (
            <span>
                Register to start
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
            return this.registerPage();
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
