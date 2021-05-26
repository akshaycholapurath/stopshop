import React, {Component} from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';
import CustomButton from '../custombutton/custombutton';
import FormInput from '../form-input/form-input';

import './signup.styles.scss';

class Signup extends Component{
    constructor(props){
        super(props);
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange=(event)=>{
        const {value,name} = event.target;
        
        this.setState({[name]:value});
    };

    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password!==confirmPassword) {
            alert(`Passwords doesn't match`);
            return;
        }

        try {
            const{user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }catch(error){
            alert(error.message);
        }
    }

    render(){
        return(
            <div className="signup">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={this.state.displayName}
                        handleChange={this.handleChange} 
                        label='displayName'
                        required/> 
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
                    <FormInput
                        name='confirmPassword' 
                        type='password' 
                        value={this.state.confirmPassword} 
                        label='confirmPassword'
                        handleChange={this.handleChange} 
                        required/>
                    <div className="button">
                    <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default Signup;