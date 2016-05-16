import React, { Component, PropTypes } from 'react';

// components
import Home from './Home';

export default class App extends Component {
  constructor(props) {
    super(props);
    // props left here incase access to route params is needed
  }

  searchChangeHandler(e) {

    let base_url = endpoints.search,
        q = 'drake',
        type = [ 'artist','album','track' ];

    fetch({ base_url, q, type }, (error, body) => {
      if (error) {
        console.log(error);
      }

      console.log(body);
    });
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
