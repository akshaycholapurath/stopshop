import userReducer from "./user/userreducer";
import {combineReducers } from 'redux';
import cartReducer from "./cart/cart.reducer";


export default combineReducers({
    user: userReducer,
    cart: cartReducer
});