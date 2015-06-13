import React from 'react';
import { Link } from 'react-router';
import { json } from 'd3';

export default React.createClass({
  getInitialState: function() {
    return { lists: [] };
  },

  componentDidMount: function() {
    json('/lists', lists => this.setState({ lists: lists }));
  },

  render: function() {
    return (
      <div className="container">
        <h1>Lists</h1>
        <ul>{
          this.state.lists.map(list =>
            <li key={list._id}><Link to={`/lists/${list._id}`}>{list.name}</Link></li>
          )
        }</ul>
        {this.props.children}
      </div>
    );
  }
});
