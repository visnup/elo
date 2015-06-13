import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <header>
        <h1>elo there</h1>
        <Link to='lists'>lists</Link>
      </header>
    );
  }
});
