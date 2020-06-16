import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import CollectionPreview from './components/collection-preview/collection-preview.component.jsx';
import './App.css';
import './pages/homepage/homepage.styles.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Use BrowserRouter, Switch, and Route to navigate the pages */}
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
