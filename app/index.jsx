import React from 'react';
import History from 'react-router/lib/BrowserHistory';
import { Router, Route, Link } from 'react-router';

import * as materialize from 'materialize-css/bin/materialize.css';

import Header from './header';
import Start from './start';
import List from './list';
import Lists from './lists';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        {this.props.children || <Start />}
      </div>
    );
  }
});

const NoMatch = React.createClass({
  render: function() {
    return <h1>404</h1>;
  }
});

React.render(
  <Router history={History}>
    <Route path="/" component={App}>
      <Route path="lists" component={Lists} />
      <Route path="lists/:id" component={List} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.body
);
