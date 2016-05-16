import React, { Component, PropTypes } from 'react';

// components
import Header from './Header';
import Search from './Search';
import Navbar from './Navbar';
import Context from './Context';

export default class Home extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      title: 'Browse the Spotify Web API',
      links: [
        {
          to: {
            pathname: 'search',
            query: {
              q: '',
              type: 'album'
            }
          },
          text: 'Albums'
        },
        {
          to: {
            pathname: 'search',
            query: {
              q: '',
              type: 'track'
            }
          },
          text: 'Tracks'
        },
        {
          to: {
            pathname: 'search',
            query: {
              q: '',
              type: 'artist'
            }
          },
          text: 'Artists'
        }
      ],
      defaultLink: {
        to: {
          pathname: 'search',
          query: {
            q: '',
            type: 'album'
          }
        },
        text: 'Albums'
      },
      contextData: props.location.query || {} // might rename to query
    }
  }

  searchChangeHandler(e) {
    /* HACK ALERT v */
    if (e.target.value.length) {
      this.props.location.pathname = 'search';
      this.props.location.query.q = e.target.value;
      this.props.location.query.type = this.props.location.query.type || 'album';
      this.context.router.replace({
        pathname: 'search',
        query: {
          q: this.props.location.query.q,
          type: this.props.location.query.type
        }
      });
      this.state.links = this.state.links.map((link) => {
        if (this.props.location.query.q) {
          link.to.query.q = this.props.location.query.q
        }
        return link;
      });
    }
    /* HACK ALERT ^ */
  }

  // expecting props from router
  componentWillReceiveProps(nextProps) {
    let {
      query
    } = nextProps.location;

    this.setState({
      contextData: query
    });
  }

  render() {
    // read up on whether this belongs in state; probs doesn't
    let componentProps = {
      headerTitle: 'Browse the Spotify Web API',
      headerSubTitle: 'Data made available by the Spotify music catalog',
      searchInputName: 'homeQuery',
      searchInputPlaceHolder: 'Search artists, tracks & albums'
    }

    return (
      <div>
        <Header title={componentProps.headerTitle} subTitle={componentProps.headerSubTitle}>
          <Search name={componentProps.searchInputName} changeHandler={this.searchChangeHandler.bind(this)}
            placeHolder={componentProps.searchInputPlaceHolder}></Search>
        </Header>
        <div>
          <Navbar links={this.state.links} defaultLink={this.state.defaultLink}></Navbar>
          <Context contextData={this.state.contextData}></Context>
        </div>
      </div>
    );
  }
}

Home.contextTypes = {
  router: () => {
    return React.PropTypes.func.isRequired
  }
}
