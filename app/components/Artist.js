import React from 'react';

// components
import Media from './Media';
import Title from './Title';
import Label from './Label';

const Artist = ({ media, text }) => {
  console.log('Album.js:9:: ', media, text);

  return (
    <div>
      {/*
          - media
          - title -> name
          - genres
          - followers
        */}
      <Media meta={media}></Media>
      <Title title={text.title}></Title>
      <Label text={text.genres.join(', ')}></Label>
      <Label text={text.followers}></Label>
    </div>
  );
}

export default Artist;
