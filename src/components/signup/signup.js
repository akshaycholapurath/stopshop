import React, {Component} from 'react';
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

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({displayName:'',email:'',password:'',confirmPassword:''})
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