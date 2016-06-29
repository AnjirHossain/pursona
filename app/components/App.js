import React, { Component } from 'react';

// components
import Home from './Home';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
