import './App.css';
import Homepage from './pages/homepage/homepage';
import {BrowserRouter,Switch,Route} from 'react-router-dom';


const App=()=> {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
