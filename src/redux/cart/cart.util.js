export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const existing = cartItems.find(cartItem=>cartItem.id===cartItemToAdd.id);

    if(existing){
        return cartItems.map(cartItem => 
            cartItem.id===cartItemToAdd.id 
            ?{...cartItem,quantity : cartItem.quantity+1}
            :cartItem 
             )
    } else {
        return [...cartItems,{...cartItemToAdd,quantity:1}]
    }
}

export const removeQuantity = (cartItems,cartItemToRemove)=>{
    const existing = cartItems.find(cartItem=>cartItem.id===cartItemToRemove.id);

    if(existing){
        return cartItems.map(cartItem => 
            cartItem.id===cartItemToRemove.id 
            ?{...cartItem,quantity : cartItem.quantity-1}
            :cartItem 
             )
    } else {
        return [...cartItems]
    }
}