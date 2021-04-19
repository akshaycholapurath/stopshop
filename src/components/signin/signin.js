import React, {Component} from 'react';
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

    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    render(){
        return(
            <div className="signin">
                <h2>I already have an account</h2>
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

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        )
    }
}

export default Signin;