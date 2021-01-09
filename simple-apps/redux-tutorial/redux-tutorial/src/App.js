// PACKAGES
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import { ToastContainer, toast, Slide } from 'react-toastify';
// MODULES
import LoginPage from './components/public/LoginPage';
import RegisterPage from './components/public/RegisterPage';
import MainPage from './components/private/MainPage';
import ModalContainer from './components/common/ModalContainer';
// STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';



class App extends Component {

  render() {
    return (
      <div className='App'>
        <Router>
          <Switch>
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/register' component={RegisterPage} />
            <PrivateRoute component={MainPage} />
          </Switch>
          <ModalContainer />
          <ToastContainer
            autoClose={2000}
            closeButton={false}
            className='text-nowrap'
            position={toast.POSITION.BOTTOM_RIGHT}
            hideProgressBar={false}
            limit={5}
            transition={Slide}
            style={{ fontSize: '1rem' }}
          />

        </Router>
      </div>
    );
  }
}

export default App;
