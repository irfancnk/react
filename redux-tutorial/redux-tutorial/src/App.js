// PACKAGES
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
// import { ToastContainer, toast, Slide } from "react-toastify";
// MODULES
import { userLoginRequest } from './services/user-service';
// STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => <div>Login Page</div>
const RegisterPage = () => <div>Register Page</div>
const MainPage = () => <div>Main Page</div>

class App extends Component {

  componentDidMount() {
    userLoginRequest("admin@mail.com", "admin");
  }

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <PrivateRoute component={MainPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
