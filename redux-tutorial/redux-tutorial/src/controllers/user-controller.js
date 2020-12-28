// PACKAGES
import Cookies from 'js-cookie';
// MODULES
import { setAuthenticationToken } from '../services/user-service';

function recoverAuth(state) {
    var token = Cookies.get('token');
    if (token) {
        setAuthenticationToken(token);
        state.applicationUser.isAuthenticated = true;
        state.applicationUser.email = "email";
    }
    return state;
}

export {
    recoverAuth
};