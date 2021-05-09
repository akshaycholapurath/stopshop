import './App.css';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage';
import Header from './components/headercomponent/headercomponent';
import Signinpage from './pages/signinpage/signinpage';
import { Component } from 'react';
import { auth,createUserProfileDocument } from './firebase/firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkoutpage from './pages/checkout/checkoutpage';
import CategoryPage from './pages/collection/categorypage';
import { fetchCollectionsStartAsync } from './redux/shop/shop.actions';

const mapStateToProps=state=>({
  currentUser: selectCurrentUser(state),
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCollections: ()=> dispatch(fetchCollectionsStartAsync())
})


class App extends Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser,updateCollections} = this.props;
    updateCollections();
    
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot=>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
         })
        } ;   
        setCurrentUser(userAuth);
      }) 
    };
  

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shoppage} />
          <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>) :(<Signinpage />)} />
          <Route exact path='/checkout' component={Checkoutpage} />
          <Route path='/:collectionId' component={CategoryPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
