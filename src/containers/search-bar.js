import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({ term });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    // console.log(this.props.fetchWeather);
    this.setState({ term: '' });
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
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
