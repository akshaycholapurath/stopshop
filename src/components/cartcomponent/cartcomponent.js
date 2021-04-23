import React, { Component } from 'react';
import CustomButton from '../custombutton/custombutton';
import './cartcomponent.styles.scss';


class CartComponent extends Component {


    render(){
        return(
        <div className='cartcomponent'> 
            <div className='cart-items'>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>       
        </div>
        )
    }  
}

export default CartComponent;