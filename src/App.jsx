import './App.css';
import {Route, Switch} from 'react-router'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
