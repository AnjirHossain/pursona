import React, { PropTypes } from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

const Album = ({ media, text }) => {

  return (
    <div>
      <Media meta={media}></Media>
      <Title text={text.title}></Title>
      <Label text={text.albumType}></Label>
      <Label text={text.externalLink}></Label>
    </div>
  );
}

Album.propTypes = {
  media: PropTypes.object.isRequired || PropTypes.string.isRequired,
  text: PropTypes.object.isRequired
}

export default Album;
