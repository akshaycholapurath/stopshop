import React, {Component} from 'react';
import './headercomponent.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartComponent from '../cartcomponent/cartcomponent';
import {createStructuredSelector} from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
});

const Header =({currentUser,hidden})=> {
   
        return(
            <div className="header">
                <Link className="logo-container" to='/'>
                    STOPSHOP
                </Link>
                <div className="options">
                    <Link className="option" to='/shop'>SHOP
                    </Link>
                    <Link className="option" to='/contact'>CONTACT
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