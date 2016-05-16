import React from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

const Track = ({ media, text }) => {
  console.log('Track.js:9:: ', media, text);

  return (
    <div>
      {/* <Media meta={media}></Media> re-introduce once we've discovered solution to get track art */}
      <Title text={text.title}></Title>
      <Label text={text.trackNumber}></Label>
      <Label text={text.duration}></Label>
      <Label text={text.artists.join(', ')}></Label>
      {text.explicit ? <Label text='e'></Label>:''}
    </div>
  );
}

export default Track;
