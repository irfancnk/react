// PACKAGES
import { combineReducers } from 'redux';
// MODULES
import { applicationUser } from './applicationUser';
import { loginPage } from './loginPage';
import { registerPage } from './registerPage';
import { mainPage } from './mainPage';

export default combineReducers({
    applicationUser,
    loginPage,
    registerPage,
    mainPage
});
