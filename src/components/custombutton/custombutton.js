import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({children,isGoogleSignIn,inverted,...Otherprops}) =>{
    return(
        <button className={`${inverted? 'inverted':""} ${isGoogleSignIn? 'google-sign-in':""} custom-button`} {...Otherprops}>
            {children}
        </button>
    )
}

export default CustomButton;