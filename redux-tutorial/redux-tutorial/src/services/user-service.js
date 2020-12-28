// PACKAGES
import axios from 'axios';
// MODULES




function setAuthenticationToken(token) {
    axios.defaults.timeout = 15000;
    if (token) {
        axios.defaults.headers.common.Authorization = token;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }    
}


export {
    setAuthenticationToken
};