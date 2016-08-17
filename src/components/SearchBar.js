import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }
  render() {

    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={e => this.onInputChange(e.target.value)} />
        {this.state.term}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}
