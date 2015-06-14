import React from 'react';
import { json } from 'd3';

export default React.createClass({
  getInitialState() {
    return {};
  },

  getStateFromStore(props) {
    json(`/lists/${props.params.id}`, list => this.setState(list));
  },

  componentDidMount() {
    this.getStateFromStore(this.props);
  },

  componentWillReceiveProps(props) {
    this.getStateFromStore(props);
  },

  render() {
    return (
      <div className="container">
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});
