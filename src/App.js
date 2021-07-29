import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Heros from './components/Heros';

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='navbar'>navbar placeholder</div>
        <div className='main-content'>
          <Switch>
            <Route path='/' exact={true}>
              <Home/>
            </Route>
            <Route path='/:universe/heros'>
              <Heros/>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
