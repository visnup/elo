import React from 'react';
import { xhr } from 'd3';

export default React.createClass({
  onSubmit(e) {
    e.preventDefault();
    let list = {
      name: this.refs.name.getDOMNode().value.trim(),
      description:this.refs.description.getDOMNode().value.trim()
    };
    console.log(list);
  },

  render() {
    return (
      <div className="container">
        <h1>New List</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <input placeholder="Name" ref="name" type="text" className="form-control input-lg" />
          </div>
          <div className="form-group">
            <textarea placeholder="Description" ref="description" className="form-control input-lg">
            </textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">Save</button>
          </div>
        </form>
      </div>
    );
  }
});
