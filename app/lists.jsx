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
      <div>
        <ul>{
          this.state.lists.map(list =>
            <li><Link to={`/lists/${list._id}`}>{list.name}</Link></li>
          )
        }</ul>
        {this.props.children}
      </div>
    );
  }
});
