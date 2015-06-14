import React from 'react';
import History from 'react-router/lib/BrowserHistory';
import { Router, Route, Link } from 'react-router';

import * as normalize from 'normalize.css';
import { Styles } from 'material-ui';

import Nav from './nav';
import Start from './start';
import List from './list';
import ListForm from './list-form';

const App = React.createClass({
  getInitialState() {
    return { themeManager: new Styles.ThemeManager() };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return { muiTheme: this.state.themeManager.getCurrentTheme() };
  },

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
      //<Route path="lists/new" component={ListForm} />
      <Route path="lists/:id" component={List} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>,
  document.body
);
