import React, {Component} from 'react';
import {auth, signInWithGoogle } from '../../firebase/firebase.util';
import CustomButton from '../custombutton/custombutton';
import FormInput from '../form-input/form-input';

import './signin.styles.scss';

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(event)=>{
        const {value,name} = event.target;
        
        this.setState({[name]:value})
    }

    handleSubmit = async event=>{
        event.preventDefault();
        const{email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});
        } catch(error){
            alert("Invalid credentials!");
        }   
    }

    render(){
        return(
            <div className="signin">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label='email'
                        required/>                  
                    <FormInput
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='password'
                        handleChange={this.handleChange} 
                        required/>
                    <div className="button">
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default Signin;