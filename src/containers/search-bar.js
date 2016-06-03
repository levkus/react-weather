import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({ term });
  }

  onFormSubmit(e) {
    e.preventDefault();
    // Fetch weather data
  }

  render() {
    return(
      <form className="input-group" onSubmit={e => this.onFormSubmit(e)}>
        <input
          className="form-control"
          placeholder="Enter city (e.g. 'Moscow')"
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
