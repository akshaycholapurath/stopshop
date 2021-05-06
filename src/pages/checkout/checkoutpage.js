import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/cart-item/cartitem';
import CheckoutItem from '../../components/checkout-items/checkoutitems';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkoutpage.styles.scss' ;

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state),
    cartTotal: selectCartTotal(state)
})

const Checkoutpage =({cartItems,cartTotal})=>{

        return(
            <div className="checkout-page">              
               <div className="header">
                   <div className="header-block">
                       <span>Product</span>
                   </div>
                   <div className="header-block">
                       <span>Description</span>
                   </div>
                   <div className="header-block">
                       <span>Quantity</span>
                   </div>
                   <div className="header-block">
                       <span>Price</span>
                   </div>
                   <div className="header-block">
                       <span>Remove</span>
                   </div>    
               </div>
               
               {
                   cartItems.map(cartItem=><CheckoutItem key={cartItem.id} item={cartItem} />) 
                }
                
                <div className="total">
                    TOTAL : $ {cartTotal}
                </div>
                <StripeCheckoutButton price={cartTotal} />
            </div>
        )

}

export default connect(mapStateToProps,null)(Checkoutpage);