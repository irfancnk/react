// PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
// MODULES
import PrimaryButton from '../common/PrimaryButton';
import { userRegister } from '../../controllers/user-controller';
// STYLES
import './RegisterPage.css';

class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.credentials = {
            email: "",
            name: "",
            password: ""
        }
    }

    onChange(e, parameter) {
        this.credentials[parameter] = e.target.value.trim();
    }

    registerCallback(e) {
        e.preventDefault();
        const { email, name, password } = this.credentials;
        this.props.dispatcher(userRegister(email, name, password));
    }


    registerPage() {
        return (
            <div className="register-container container-fluid h-100 m-0 p-0">
                <div className="register-row row h-100 m-0 p-0">
                    <div className="register-column-header col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 m-0 p-0"/>
                    <div className="register-column-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="d-flex h-100 w-100 align-items-center justify-content-center p-2">
                            <div className='register-card card m-0 p-0'>
                                <div className='card-body h-100'>
                                    <form className='d-flex flex-column justify-content-around h-100' onSubmit={(e) => this.registerCallback(e)}>

                                        <input
                                            onChange={(e) => this.onChange(e, "email")}
                                            required
                                            placeholder="Email"
                                            className="form-control mb-1 px-2 py-3"
                                            type="text"
                                            id="email"
                                        />

                                        <input
                                            onChange={(e) => this.onChange(e, "name")}
                                            required
                                            placeholder="John Doe"
                                            className="form-control mb-1 px-2 py-3"
                                            type="text"
                                            id="name"
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
                                            isLoading={this.props.registerPage.requestInProgress}
                                            type="submit"
                                        >
                                            Register
                                        </PrimaryButton>

                                        <label className="pt-2">
                                            Already have an account?{' '}
                                            <span className="register-text-label">
                                                <Link className="register-link-style" to={"/login"}>
                                                    Login
                                                </Link>
                                            </span>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register-column-footer col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" />
                </div>
            </div>
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
    applicationUser: state.applicationUser,
    registerPage: state.registerPage
});

const mapDispatchToProps = (dispatch) => ({
    dispatcher(action) {
        dispatch(action);
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
