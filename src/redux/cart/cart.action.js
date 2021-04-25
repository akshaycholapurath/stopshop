export const toggleCart = () =>({
    type: 'TOGGLE_CART',
})

export const addItem = item =>({
    type: 'ADD_ITEM',
    payload:item
});

export const removeItem = item=>({
    type: 'REMOVE_ITEM',
    payload:item
})

export const removeQuantity = item =>({
    type: 'REMOVE_QUANTITY',
    payload:item
});