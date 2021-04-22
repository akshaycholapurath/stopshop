import userReducer from "./user/userreducer";
import {combineReducers } from 'redux';


export default combineReducers({
    user: userReducer
});