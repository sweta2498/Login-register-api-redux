
import { setLogout } from "../Redux/LoginAction";

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = tokenDetails.expiresIn
    
    localStorage.setItem('token',  JSON.stringify(tokenDetails));
}

export function runLogoutTimer( timer) {
  
    setTimeout(() => { 
        setLogout()
    }, timer);
}


