import React from 'react';
import { Link } from 'react-router';
import { json } from 'd3';

export default React.createClass({
  getInitialState() {
    return { lists: [] };
  },

  componentDidMount() {
    json('/lists', lists => this.setState({ lists: lists }));
  },

  render: function() {
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <Link to='/' className="brand-logo">elo</Link>
            <ul className="right hide-on-med-and-down">
              {this.state.lists.map(list =>
                <li key={list._id}>
                  <Link to={`/lists/${list._id}`}>{list.name}</Link>
                </li>
              )}
              <li><Link to='/lists/new'>
                <i className="mdi-content-add"></i>
              </Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
});
