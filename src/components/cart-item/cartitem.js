import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.action';

import './cartitem.styles.scss';

const mapDispatchToProps = dispatch=>({
    removeItem : item=> dispatch(removeItem(item))
})

const CartItem =({item,removeItem})=>{

    const {imageUrl,name,price,quantity} = item;

        return(
        <div className='cart-item'> 
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            <div onClick={()=>removeItem(item)} className='remove' >&#10006;</div>

        </div>
        )
     
}

export default connect(null,mapDispatchToProps)(CartItem);