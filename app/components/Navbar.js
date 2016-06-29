import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Navbar = (props) => (
  <nav>
    {
      props.links.map((link, i) => {
        if (link === props.defaultLink) {
          return <Link to={props.defaultLink.to} key={i}>{props.defaultLink.text}</Link>
        } else {
          return <Link to={link.to} key={i}>{link.text}</Link>
        }
      })
    }
  </nav>
);

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
  defaultLink: PropTypes.object.isRequired
}

export default Navbar;
