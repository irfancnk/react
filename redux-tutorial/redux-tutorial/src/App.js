// PACKAGES
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ToastContainer, toast, Slide } from "react-toastify";
// MODULES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => <div>Login Page</div>
const RegisterPage = () => <div>Register Page</div>

class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/' component={RegisterPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
