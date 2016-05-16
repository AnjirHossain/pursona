import React from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

const Album = ({ media, text }) => {
  console.log('Album.js:9:: ', media, text);

  return (
    <div>
      <Media meta={media}></Media>
      <Title text={text.title}></Title>
      <Label text={text.albumType}></Label>
      <Label text={text.externalLink}></Label>
    </div>
  );
}

export default Album;
