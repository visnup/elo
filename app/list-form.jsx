import React from 'react';
import { Button } from 'react-bootstrap';

export default React.createClass({
  onSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className="container">
        <h1>New List</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <textarea className="form-control"></textarea>
          </div>
          <div className="form-group">
            <Button bsStyle="primary" bsSize="large">Save</Button>
          </div>
        </form>
      </div>
    );
  }
});
