import React,{Component} from 'react';
import './contactpage.styles.scss';
import { InputGroup, InputGroupAddon, InputGroupText, Input,Button } from 'reactstrap';

class Contactpage extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname:'',
            email:'',
            number:'',
            text:''
        }
    }

    handleChange=(event)=>{
        const {value,name} = event.target;
        
        this.setState({[name]:value});
    };

    handleSubmit = ()=>{
        const {fullname,email,number,text} = this.state;
        if(fullname&&email&&number&&text){
            
            this.setState({
                fullname:'',
                email:'',
                number:'',
                text:''
            })
            
            alert("Message has been sent.")
        }
        else{
            alert("Please fill up the form completely")
        }

        this.setState({
            fullname:'',
            email:'',
            number:'',
            text:''
        })
    }

    render(){
        return(
            <div className='contactpage'>
                        <div className='heading'>
                            Contact Us
                        </div>
                        <hr />
                        <div className='subheading'>
                            We'd love to hear from you!
                        </div>
                        <br />
                        <br />
                        <div className='inputgroup'>
                                <InputGroup >
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                    name="fullname" 
                                    type="text" 
                                    placeholder="Full Name"                                 
                                    onChange={this.handleChange} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Email
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                    name="email" 
                                    atype="email" 
                                    placeholder="Email" 
                                    onChange={this.handleChange} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        Tel No
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input 
                                    name="number"
                                    type="number" 
                                    placeholder="+91 - "
                                    onChange={this.handleChange} />
                                </InputGroup>
                                <br />
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                        What is this about?
                                    </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                    name="text" 
                                    type="textarea" 
                                    placeholder="Go ahead. We are listening "
                                    onChange={this.handleChange} />
                                </InputGroup>
                                <br />
                                                           
                        </div>
                        <Button 
                        color="dark"
                        onClick={this.handleSubmit}>
                                    Submit
                        </Button>
                
            </div>

        )
    }
}


export default Contactpage;