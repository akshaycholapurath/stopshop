import React, {Component} from 'react';
import './headercomponent.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartComponent from '../cartcomponent/cartcomponent';

const mapStateToProps = state=>({
    currentUser:state.user.currentUser,
    hidden: state.cart.hidden
})

const Header =({currentUser,hidden,toggleCart})=> {
   
        return(
            <div className="header">
                <Link className="logo-container" to='/'>
                    LOGO
                </Link>
                <div className="options">
                    <Link className="option" to='/shop'>SHOP
                    </Link>
                    <Link className="option" to='/shop'>CONTACT
                    </Link>
                    
                    {
                        currentUser?
                        <div className="signout">
                            <div className="option" >{currentUser.displayName}</div>
                            <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                            <div className="option"><CartIcon /></div>
                        </div>
                        :
                        <Link className="option" to='/signin'>SIGN IN
                        </Link>

                    }
                    
                </div>
                {
                    hidden? null:<CartComponent />            
                }                        
            </div>
        )
    
}

export default connect(mapStateToProps,null)(Header);