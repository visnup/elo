import React from 'react';
import { json } from 'd3';

export default React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
    json(`/lists/${this.props.params.id}`, list => this.setState(list));
  },

  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});
