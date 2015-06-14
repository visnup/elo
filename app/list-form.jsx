import React from 'react';

export default React.createClass({
  onSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className="container">
        <h1>New List</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" />
          <textarea className="materialize-textarea"></textarea>

          <button className="btn">Save</button>
        </form>
      </div>
    );
  }
});
