// PACKAGES
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, applicationUser, ...rest }) => (
    <Route {...rest}
        render={
            (props) =>
            applicationUser.isAuthenticated === true ?
            (<Component {...props} />)
            :
            (<Redirect to='/login' />)
        }
    />
);

const mapStateToProps = (state) => ({
    applicationUser: state.applicationUser,
});

export default connect(mapStateToProps)(PrivateRoute);
