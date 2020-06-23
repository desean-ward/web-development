import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import CollectionPreview from './components/collection-preview/collection-preview.component.jsx';
import './App.css';
import './pages/homepage/homepage.styles.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,

    }
  }

  /* Setup unsubscribe method */
  unsubscribeFromAuth = null;

  /* #Whenever a user logs in with Goggle, or email and password, we want to store it in App.js to pass it to the components*/
  /* User will remain logged in, until signed out */
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  /* Close the subscription to prevent memory leaks */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Use BrowserRouter, Switch, and Route to navigate the pages */}
        <BrowserRouter>
          { /* Place the Header outside of the Switch
            Adds currentUser property to the header to determine 
            if a user is signed in or out (an object or null) */ }
          <Header currentUser={ this.state.currentUser } />
          <Switch>
            <Route exact path='/' component={ HomePage } />
            <Route path='/shop' component={ ShopPage } />
            <Route path='/signin' component={ SignInAndSignUpPage } />
          </Switch>
        </BrowserRouter>
      </div>
    ); 
  }
  
}

export default App;
