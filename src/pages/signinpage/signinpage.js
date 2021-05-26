import React from 'react';
import Signin from '../../components/signin/signin';
import Signup from '../../components/signup/signup';
import './signinpage.styles.scss' ;


const Signinpage =()=>{

        return(
            <div className="component">
               <Signin />
               <Signup />
            </div>
        )

}

export default Signinpage;