import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCart } from '../../redux/cart/cart.action';
import { cartItemsCount } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';

const mapDispatchToProps = dispatch=>({
    toggleCart : ()=> dispatch(toggleCart())
})

const mapStateToProps = state=>({
    cartItemsCount: cartItemsCount(state)
})

const CartIcon = ({toggleCart,cartItemsCount})=>(
    <div className='cart-icon' onClick={toggleCart}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartItemsCount}</span>
    </div>
);

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
