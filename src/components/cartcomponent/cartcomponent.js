import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cartitem';
import CustomButton from '../custombutton/custombutton';
import './cartcomponent.styles.scss';
import { toggleCart } from '../../redux/cart/cart.action';


const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch=>({
    toggleCart : ()=> dispatch(toggleCart())
})

const CartComponent =({cartItems,history,toggleCart})=>{

        return(
        <div className='cartcomponent'> 
            <div className='cart-items'>
                {
                    cartItems.length?
                    cartItems.map(cartItem=>
                        <CartItem key={cartItem.id} item={cartItem} />
                    )
                    :
                    <span className='empty-message'>Your Cart is Empty</span>
                }              
            </div>         
                 <CustomButton onClick={()=>toggleCart() && history.push('/checkout')}>GO TO CHECKOUT</CustomButton>        
        </div>
        )

}

export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(CartComponent));