// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// MODULES
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';
import { userLogin } from '../../controllers/user-controller';
// STYLES
import './LoginPage.css'

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.credentials = {
            email: "",
            password: ""
        }
    }

    onChange(e, parameter) {
        this.credentials[parameter] = e.target.value.trim();
    }

    loginCallback(e) {
        e.preventDefault();
        const { email, password } = this.credentials;
        this.props.dispatcher(userLogin(email, password));
    }

    loginPage() {
        return (
            <div className="login-container container-fluid h-100 m-0 p-0">
                <div className="login-row row h-100 m-0 p-0">
                    <div className="login-column-header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0">
                        <div className="login-column-circle col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0" />
                    </div>
                    <div className="login-column-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="d-flex h-100 w-100 align-items-center justify-content-center p-2">
                            <div className='login-card card m-0 p-0'>
                                <div className='card-body h-100'>
                                    <form className='d-flex flex-column justify-content-around h-100' onSubmit={(e) => this.loginCallback(e)}>

                                        <input 
                                            onChange={(e) => this.onChange(e, "email")} 
                                            required 
                                            placeholder="Email" 
                                            className="form-control mb-1 px-2 py-3" 
                                            type="text" 
                                            id="email" 
                                        />

                                        <input 
                                            onChange={(e) => this.onChange(e, "password")} 
                                            required 
                                            placeholder="Password" 
                                            className="form-control mb-1 px-2 py-3" 
                                            type="password" 
                                            id="password" 
                                            autoComplete='current-password' 
                                        />

                                        <PrimaryButton 
                                            isLoading={this.props.loginPage.requestInProgress} 
                                            type="submit"
                                        >
                                            Login
                                        </PrimaryButton>

                                        <label>
                                            <span className="login-text-label">
                                                Forgot Password?
                                            </span>
                                        </label>

                                        <label className="login-or-label">or</label>

                                        <SecondaryButton>
                                            Login with Facebook
                                        </SecondaryButton>

                                        <label className="pt-2">
                                            Don't have an account?{' '}
                                            <span className="login-text-label">
                                                <Link className="login-link-style" to={"/register"}>
                                                    Sign Up
                                                </Link>
                                            </span>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-column-footer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" />
                </div>
            </div>
        );
    }

    redirection() {
        return (
            <Redirect to='/' />
        );
    }

    redirectionConditinal(isAuthenticated) {
        if (isAuthenticated) {
            return this.redirection();
        } else {
            return this.loginPage();
        }
    }

    render() {
        return this.redirectionConditinal(this.props.applicationUser.isAuthenticated);
    }
}

const mapStateToProps = (state) => ({
    applicationUser: state.applicationUser,
    loginPage: state.loginPage
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        return dispatch(action);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
