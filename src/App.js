import './App.css';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage';
import Header from './components/headercomponent/headercomponent';
import Signinpage from './pages/signinpage/signinpage';
import { Component } from 'react';
import { auth } from './firebase/firebase.util';



class App extends Component{
  constructor(props){
    super(props);
    this.state={
      currentUser:null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>

        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/signin' component={Signinpage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
