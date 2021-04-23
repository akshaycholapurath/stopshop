import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cartitem';
import CustomButton from '../custombutton/custombutton';
import './cartcomponent.styles.scss';


const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})

const CartComponent =({cartItems})=>{

        return(
        <div className='cartcomponent'> 
            <div className='cart-items'>
                {
                    cartItems.map(cartItem=>
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                }              
            </div> 
            <CustomButton>GO TO CHECKOUT</CustomButton>      
        </div>
        )

}

export default connect(mapStateToProps,null)(CartComponent);