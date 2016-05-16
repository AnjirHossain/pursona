import React from 'react';

const Header = (props) => (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subTitle}</p>
      {props.children}
    </div>
);

export default Header;
