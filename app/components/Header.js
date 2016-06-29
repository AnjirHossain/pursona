import React, { PropTypes } from 'react';

const Header = (props) => (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
      {props.children}
    </div>
);

Header.propTypes = {
    children: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default Header;
