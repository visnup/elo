import React from 'react';
import { InputWrapper, Waves } from 'energize';

export default React.createClass({
  onSubmit(e) {
    e.preventDefault();
  },

  render() {
    return (
      <div className="container">
        <h1>New List</h1>
        <form onSubmit={this.onSubmit}>
          <InputWrapper label="Name">
            <input type="text" />
          </InputWrapper>
          <InputWrapper label="Description">
            <textarea className="materialize-textarea"></textarea>
          </InputWrapper>

          <Waves><button className="btn">Save</button></Waves>
        </form>
      </div>
    );
  }
});
