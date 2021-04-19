import React, {Component} from 'react';
import './headercomponent.styles.scss';
import {Link} from 'react-router-dom';

class Header extends Component {

    render(){
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
                    
                </div>
            </div>
        )
    }
}

export default Header;