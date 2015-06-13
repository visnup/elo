import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to='/' className="brand-logo">elo</Link>
          <ul className="right hide-on-med-and-down">
            <li><Link to='lists'>Lists</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});
