import React from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Heros from './components/Heros';
import Villains from './components/Villains';

function App() {

  return (
    <BrowserRouter>
      <div className='app-container'>
        <NavLink to='/'>
          <div className='navbar'/>
        </NavLink>
        <div className='main-content'>
          <Switch>
            <Route path='/' exact={true}>
              <Home/>
            </Route>
            <Route path='/:universe/heros' exact={true}>
              <Heros/>
            </Route>
            <Route path='/:universe/villains' exact={true}>
              <Villains/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
