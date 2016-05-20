import React, { PropTypes } from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

const Artist = ({ media, text }) => {
  return (
    <div>
      <Media meta={media}></Media>
      <Title title={text.title}></Title>
      <Label text={text.genres.join(', ')}></Label>
      <Label text={text.followers}></Label>
    </div>
  );
}

Artist.propTypes = {
  media: PropTypes.object.isRequired || PropTypes.string.isRequired,
  text: PropTypes.object.isRequired
}

export default Artist;
