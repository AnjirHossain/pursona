import React, { Component, PropTypes } from 'react';

// components
import ResultList from './ResultList';

// api dependencies
import fetch from '../../api/controllers/fetch';
// holds the responsibility of forming amazing urls
import construct from '../../api/utils/construct';
import typebindings from '../../api/utils/typebindings';
// holds base urls
import endpoints from '../../api/endpoints/ep';



// made a class instead of a func for a reason utilize well
export default class Context extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(newProps) {
    let {
      q,
      type,
    } = newProps.contextData;

    // construct will take given endpoint and return expected url
    let url = construct(endpoints.search, [ q, type]);

    // design callbacks nicer
    fetch(url, (error, data) => {
      if (!error && data) {
        // hard code now, make dynamic later, can't blow up fetch callback with all this logic
        let content = JSON.parse(data);

        let {
          items
        } = content[typebindings[type]];

        this.setState({
          results: items
        });

        console.log('results every time new props come in: ', this.state.results);
      } else {
        if (error) console.log('Reflect this error in UI: ', error);
      }
    });
  }

  render() {
    return (
      <div>
        <ResultList items={this.state.results}></ResultList>
      </div>
    );
  }
}

Context.contextTypes = {
  router: () => {
    return React.PropTypes.func.isRequired
  }
}

Context.propTypes = {
  location: PropTypes.object.isRequired
}
