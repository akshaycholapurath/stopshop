import React  from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, removeQuantity } from '../../redux/cart/cart.action';

import './checkoutitems.styles.scss';

const mapDispatchToProps = dispatch=>({
    removeItem : item=> dispatch(removeItem(item)),
    addItem: item=> dispatch(addItem(item)),
    removeQuantity: item=> dispatch(removeQuantity(item))
})

const CheckoutItem =({item,removeItem,addItem,removeQuantity})=>{

    const {imageUrl,name,price,quantity} = item;

    return(
    <div className='checkout-item'> 
        <div className='image-container'>
         <img src={imageUrl} alt='item' />
        </div>  
        <span className='name'>{name}</span>
        <span className='quantity'> 
            {
                quantity>1
                ? <span onClick={()=>removeQuantity(item)} className='arrow' >&#10094;</span> 
                : <span onClick={()=>removeItem(item)} className='arrow' >&#10094;</span>
            }     
            {quantity}
            <span onClick={()=>addItem(item)} className='arrow' >&#10095;</span>
        </span>
        <span className='price'> ${price * quantity}</span>
        <span onClick={()=>removeItem(item)} className='remove' >&#10006;</span>

    </div>
    )
     
}

export default connect(null,mapDispatchToProps)(CheckoutItem);