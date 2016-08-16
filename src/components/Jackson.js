import React, { Component} from 'react';

export default class Jackson extends Component {

  constructor() {
    super();
    this.state = {
      addedValue: '',
      num1: 1,
      num2: 2,
      magic: 0,
      numbers: []
    };
  }
  render() {
    return (
    <div>
      <p>Jackson is #{this.state.num1}</p>
      {this.state.numbers}
      <button onClick={e => {
        this.setState({ magic: this.getRandomNumber() });
      }}>add random number</button>
    </div>
    );
  }

  getRandomNumber() {
    let numbers = this.state.numbers;
    let roll = Math.floor(Math.random() * 10);
    numbers.push(roll);
    this.setState({ numbers: numbers });
    return roll;
  }
}
