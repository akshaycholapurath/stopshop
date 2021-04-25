import { addItemToCart,removeQuantity } from "./cart.util";

const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'TOGGLE_CART':
            return {...state, hidden:!state.hidden}

        case 'ADD_ITEM':
        return {...state, cartItems:addItemToCart(state.cartItems,action.payload)}

        case 'REMOVE_ITEM':
        return {...state, cartItems: state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)}

        case 'REMOVE_QUANTITY':
        return {...state, cartItems:removeQuantity(state.cartItems,action.payload)}

        default:
            return state;
    }
} 

export default cartReducer;