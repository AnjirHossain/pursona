import React, { PropTypes } from 'react';

const Search = (props) => (
  <input name={props.name} type={props.type} onChange={props.changeHandler} placeholder={props.placeHolder}/>
);

// do proptypes
Search.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired
}

export default Search;
