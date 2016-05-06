import React from 'react';

const Header = (props) => (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
);

export default Header;
