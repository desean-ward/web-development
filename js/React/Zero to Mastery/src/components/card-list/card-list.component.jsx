import React from 'react';

import { Card } from '../card/card.component.jsx';

import './card-list.styles.css';


export const CardList = props => {
    console.log(props);
    return <div className='card-list'>
        {
          /* Use'map' to iterate and display each element within a certain state
              A good rule of thumb is to use the 'key' attribute anytime you use
              the 'map()' function inside of a render. */
          props.monsters.map(monster => (
              <Card key={ monster.id } monster={ monster } />
          ))
        }      
    </div>
}