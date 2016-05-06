import React, { Component, PropTypes } from 'react';

// controllers
import fetch from '../../api/controllers/fetch';
import endpoints from '../../api/endpoints/ep';

// components
import Header from './Header';
import Search from './Search'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Browse the Spotify Web API'
    }
  }

  searchChangeHandler(e) {
    /*
      useful
      ______
      q - required | must be one single token
      type - required | can be multiple types separated by commas

      strategy
      ________

    */

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
        <Header title={this.state.title}>
          <Search name="searchInput"
                  type="text"
                  placeHolder="Search albums, tracks or artists"
                  changeHandler={this.searchChangeHandler.bind(this)} />
        </Header>
      </div>
    );
  }
}
