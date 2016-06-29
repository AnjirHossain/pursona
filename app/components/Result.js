import React, { PropTypes } from 'react';

// components
import Album from './Album';
import Track from './Track';
import Artist from './Artist';

const Result = (props) => {
  let resultOfType;

  let resultTypeProps = {
    media: [],
    text: {}
  }

  // assumes a SHITTON of knowledge of API object models; lookup and justify this or fix
  // be defensive and set defualts using pipe ||
  // test exhaustively
  if (props.result && props.resultType) {
    // shared commonly by all switch cases
    if (props.result.images && props.result.images.length) {
      resultTypeProps.media = props.result.images[props.result.images.length - 1];
    } else {
      resultTypeProps.media = 'http://image.vsco.co/1/54c4ee94b77092035729/554f63f02b561509118b4577/300x300/vsco_051015.jpg';
    }
    resultTypeProps.text.title = props.result.name || 'Unknown';
    resultTypeProps.text.objectDepthHref = props.result.href;
    resultTypeProps.text.externalLink = props.result.external_urls.spotify;

    switch (props.resultType) {
      case 'album':
        resultTypeProps.text.albumType = props.result.album_type || 'Un-categorized';

        resultOfType = <Album media={resultTypeProps.media} text={resultTypeProps.text}></Album>;
        break;
      case 'track':
        resultTypeProps.text.trackNumber = props.result.track_number
        resultTypeProps.text.artists = props.result.artists;
        resultTypeProps.text.duration = props.result.duration_ms;
        resultTypeProps.text.isExplicit = props.result.explicit;

        resultOfType = <Track media={resultTypeProps.media} text={resultTypeProps.text}></Track>;
        break;
      case 'artist':
        resultTypeProps.text.genres = props.result.genres.length ? props.result.genres : [];
        resultTypeProps.text.followers = props.result.followers.total || 'Follower count unavailable';

        resultOfType = <Artist media={resultTypeProps.media} text={resultTypeProps.text}></Artist>;
        break;
    }
  }

  return (
    <div>
      {resultOfType}
    </div>
  );
}

Result.protoTypes = {
  resultType: PropTypes.string.isRequired,
  result: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired
}

export default Result;
