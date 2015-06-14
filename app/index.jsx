import React from 'react';
import History from 'react-router/lib/BrowserHistory';
import { Router, Route, Link } from 'react-router';

import * as bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Nav from './nav';
import Start from './start';
import List from './list';
import ListForm from './list-form';

const App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        {this.props.children || <Start />}
      </div>
    );
  }
});

const NoMatch = React.createClass({
  render() {
    return <h1>404</h1>;
  }
});

React.render(
  <Router history={History}>
    <Route path="/" component={App}>
      <Route path="lists/new" component={ListForm} />
      <Route path="lists/:id" component={List} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.body
);
