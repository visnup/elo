import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="container">
        <h1>New List</h1>
        <form>
          <div className="input-field">
            <input placeholder="Name" type="text" />
          </div>
          <div className="input-field">
            <textarea placeholder="Description" className="materialize-textarea">
            </textarea>
          </div>
        </form>
      </div>
    );
  }
});
