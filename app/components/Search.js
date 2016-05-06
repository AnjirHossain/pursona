import React, { PropTypes } from 'react';

const Search = (props) => (
  <input name={props.name} type={props.type} onChange={props.changeHandler} placeholder={props.placeHolder}/>
);

// do proptypes

export default Search;
