import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';

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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
