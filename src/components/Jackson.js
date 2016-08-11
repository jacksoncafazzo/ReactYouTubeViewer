import React, { Component } from 'react';

export default class Jackson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedValue: '',
      num1: 1,
      num2: 2
    };
  }
  render() {
    return (
    <div>
      <p>Jackson is #{this.state.num1}</p>
    </div>
  );
  }
}
