import React, { PropTypes } from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

// add media retrieval for Track, here or (in parent)
const Track = ({ text }) => {
  return (
    <div>
      <Title text={text.title}></Title>
      <Label text={text.trackNumber}></Label>
      <Label text={text.duration}></Label>
      <Label text={text.artists.join(', ')}></Label>
      {text.explicit ? <Label text='e'></Label>:''}
    </div>
  );
}

Track.propTypes = {
  text: PropTypes.object.isRequired
}

export default Track;
