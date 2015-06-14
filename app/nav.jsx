import React from 'react';
import { Nav, Navbar, CollapsibleNav, Glyphicon } from 'react-bootstrap';
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
      <Navbar brand="elo">
        <CollapsibleNav>
          <Nav navbar right>
            {this.state.lists.map(list =>
              <li key={list._id}>
                <Link to={`/lists/${list._id}`}>{list.name}</Link>
              </li>
            )}
            <li><Link to='/lists/new'><Glyphicon glyph="plus" /></Link></li>
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
});
