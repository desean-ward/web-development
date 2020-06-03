import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import './App.css';
import './pages/homepage/homepage.styles.scss'
import {BrowserRouter, Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      {/* Use BrowserRouter, Switch, and Route to navigate the pages */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop/hats' component={ HatsPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
