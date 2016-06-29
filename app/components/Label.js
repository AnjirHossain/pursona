// will accept style objects
import React, { PropTypes } from 'react';

const Label = ({ text }) => (
  <label>{ text }</label>
);

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default Label;
