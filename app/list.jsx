import React from 'react';
import { json } from 'd3';

export default React.createClass({
  getInitialState: function() {
    return {};
  },

  componentDidMount: function() {
    json(`/lists/${this.props.params.id}`, list => this.setState(list));
  },

  render: function() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});
