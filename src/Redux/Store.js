import { createStore, combineReducers, compose } from "redux";
import { applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// import { SnackReducer } from "./LoginReducer";
import LoginReducer,{ SnackReducer} from "./LoginReducer";


export const reducers = combineReducers({
    login: LoginReducer,
    snack:SnackReducer,
 
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  // Specify extension's options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;


