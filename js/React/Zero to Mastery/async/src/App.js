import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends React.Component {
  /* Add 'props' to the class, good practice */
  constructor (props) {
    super(props)
    this.state = {
      meaningOfLife: 47
    };
    
  }

/* To use or manipulate the state after making an update, */
/* Create a synchronous function (such as console.log) as a second parameter, */
/* where you can use that updated state */
handleClick = () => {
  this.setState(( prevState, prevProps ) => {
    return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
  },
  () => console.log (this.state.meaningOfLife)
 )
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.meaningOfLife }
          </p>
          <button
          /*Create the onClick function*/
            onClick={this.handleClick}
          >
            Update State
          </button>
        </header>
      </div>
    );
  

  }
}

export default App;
