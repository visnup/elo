import React from 'react';
import { AppHeader, TopNav, Container, SideNav } from 'energize';
import { Link } from 'react-router';
import { json } from 'd3';

export default React.createClass({
  getInitialState() {
    return {
      lists: [],
      open: false
    };
  },

  componentDidMount() {
    json('/lists', lists => this.setState({ lists: lists }));
  },

  sideNavToggle() {
    this.setState({ open: !this.state.open });
  },

  render: function() {
    return (
      <AppHeader fixedNav={true}>
        <TopNav>
          <Container>
            <SideNav.Toggle onClick={this.sideNavToggle} />
            <Link to='/' className="brand-logo">elo</Link>
          </Container>
        </TopNav>
        <SideNav open={this.state.open} onDismiss={this.sideNavToggle}>
          <SideNav.Logo><h4>Lists</h4></SideNav.Logo>
          {this.state.lists.map(list =>
            <SideNav.Item bold={true}>
              <Link to={`/lists/${list._id}`}>{list.name}</Link>
            </SideNav.Item>
          )}
          <SideNav.Item><Link to='/lists/new'>
            <i className="mdi-content-add"></i>
          </Link></SideNav.Item>
        </SideNav>
      </AppHeader>
    );
  }
});
