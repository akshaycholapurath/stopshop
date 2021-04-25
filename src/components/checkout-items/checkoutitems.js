import React  from 'react';

import './checkoutitems.styles.scss';


const CheckoutItem =({item})=>{

    const {imageUrl,name,price,quantity} = item;

    return(
    <div className='checkout-item'> 
        <div className='image-container'>
         <img src={imageUrl} alt='item' />
        </div>  
        <span className='name'>{name}</span>
        <span className='quantity'>  {quantity}</span>
        <span className='price'> ${price * quantity}</span>
        <span className='remove'>&#10006;</span>

    </div>
    )
     
}

export default CheckoutItem;