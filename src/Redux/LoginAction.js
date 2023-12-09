
import { runLogoutTimer, saveTokenInLocalStorage } from "../Component/Service";
import { ActionTypes } from "./ActionType";
// let data = []

export const setlogin = ({ email, password }, next) =>
    async (dispatch) => {

        await fetch("http://localhost:4000/data").then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                // data = resp;

                //  find function return true false so both value check not only one
                // let payload = resp.find(user => user.email === email && user.password === password);
                // if (payload) {
                //     dispatch({
                //         type: ActionTypes.SET_LOGIN,
                //         payload
                //     })
                //     alert("Login success..!!!")
                // } else {
                //     alert("Wrong Credential..!!!")
                // }

                //filter 
                let user = resp.filter(user => user.email === email);
                console.log("user----", user);

                if (user.length) {
                    if (user[0].password === password) {
                        user = {
                            ...user,
                            expiresIn: Date.now() + (60 * 60 * 1000)
                        }
                        if (typeof next === "function") next({ message: "Successfully login", success: true, type: 'success' })
                        dispatch({
                            type: ActionTypes.SET_LOGIN,
                            payload: user
                        })
                        saveTokenInLocalStorage(user);
                        runLogoutTimer(
                            60 * 60 * 1000
                        );

                        // localStorage.setItem("token","abcdefghijklmnopqrstuvwxyz")
                        // alert("Login success..!!!")
                    } else {
                        if (typeof next === "function") next({ message: "Password Not Match..!!!", success: false, type: 'error' })
                        // alert("Password Not Match..!!!")
                    }
                }
                else {
                    if (typeof next === "function") next({ message: "User Not Found..!!!", success: false, type: 'error' })
                    // alert("User Not Found..!!!")
                }
            })
        })
    }

export const setSnackbar = (payload) =>
    (dispatch) => {
        dispatch({
            type: ActionTypes.SET_SNACKBAR,
            payload
        });
    }

export const setLogout = () =>
    (dispatch) => {
        dispatch({
            type: ActionTypes.SET_LOGOUT,

        });
    }