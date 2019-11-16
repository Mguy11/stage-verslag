import React, { Component } from 'react';

export default class Main extends Component {
  showSettings (event) {
    event.preventDefault();

  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="main">
        <p> test</p>
      </div>
    );
  }
}