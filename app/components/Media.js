// might rename to Media
import React, { PropTypes } from 'react';

const Media = ({ meta }) => (
  <img src={meta.url || 'http://image.vsco.co/1/54c4ee94b77092035729/554f63f02b561509118b4577/300x300/vsco_051015.jpg'} alt='media || seriously need alt for this' />
);

Media.propTypes = {
  meta: PropTypes.object.isRequired || PropTypes.string.isRequired
}

export default Media;
