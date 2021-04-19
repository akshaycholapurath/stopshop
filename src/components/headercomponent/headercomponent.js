import React, {Component} from 'react';
import './headercomponent.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

const Header =({currentUser})=> {

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
                        <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                        :
                        <Link className="option" to='/signin'>SIGN IN
                        </Link>

                    }
                    
                </div>
            </div>
        )
    
}

export default Header;