import React, { Component } from 'react';
import { getNewTimestamp } from './helpers/timestampHelper'

export default class App extends Component{
  constructor() {
    super();
    this.state = {
      clickArray: [],
    };
  }
  handleClick = () => {
    const newClickArray = Object.assign([], this.state.clickArray);
    newClickArray.push(getNewTimestamp());
    this.setState({
      clickArray: newClickArray
    })
  }
  render () {
    let { clickArray } = this.state;
    return (
    <div>
      <h1>React Class Components</h1>
      <button onClick={this.handleClick}>Click Me</button>
      <ul>
        {clickArray.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
    
    )
  }
}

