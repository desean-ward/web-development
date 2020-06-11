
import React from 'react';

class Lifecycles extends React.Component { 
  constructor(props) {
    super(props);
    console.log('constructor');
  }
 
  componentDidMount() {
    console.log('componentDidMount!');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return true;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Lifecycles;

