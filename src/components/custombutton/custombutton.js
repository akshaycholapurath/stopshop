import React from 'react';

import './custombutton.styles.scss';

const CustomButton = ({children,isGoogleSignIn,...Otherprops}) =>{
    return(
        <button className={`${isGoogleSignIn? 'google-sign-in':""} custom-button`} {...Otherprops}>
            {children}
        </button>
    )
}

export default CustomButton;