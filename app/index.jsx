import React from 'react';
import Ajax from 'react-ajax';
import { json } from 'd3';

var App = React.createClass({
  getInitialState: function() {
    return { lists: [] };
  },

  componentDidMount: function() {
    json('/lists', lists => this.setState({ lists: lists }));
  },

  render: function() {
    return (
      <ul>{
        this.state.lists.map(list => <li><a href="">{list.name}</a></li>)
      }</ul>
    );
  }
});

React.render(<App />, document.querySelector('main'));
