import React, { PropTypes } from 'react';

// components
import Result from './Result';

const ResultList = (props) => (
  <div>
    {
      props.items.length ? props.items.map((item) => <Result resultType={item.type} result={item} key={item.id}></Result>) : 'No results to show'
    }
  </div>
);

ResultList.propTypes = {
  items: PropTypes.array.isRequired
}

export default ResultList;
