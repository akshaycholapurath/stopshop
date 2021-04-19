import './App.css';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Shoppage from './pages/shoppage/shoppage';
import Header from './components/headercomponent/headercomponent';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shoppage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
