import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCart } from '../../redux/cart/cart.action';
import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch=>({
    toggleCart : ()=> dispatch(toggleCart())
})


const CartIcon = ({toggleCart})=>(
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

export default connect(null,mapDispatchToProps)(CartIcon);
