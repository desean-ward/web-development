import React, {Component} from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';
import {SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  /* Access to constructor and its state */
  constructor() {
    /* MUST CALL SUPER() WITHIN THE CONSTRUCTOR */
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  /* Lifecyle Method. Gets called each time the component is rendered */
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters: users }));
}

/* Function to handle Search Box change */
handleChange = (e) => {
  this.setState({ searchField: e.target.value });
}


  render() {
    /* Destructure the array */
    const { monsters, searchField } = this.state;
 /* Create a new array (monster) and filter out the monsters (card-list) */
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={ this.handleChange } 
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
