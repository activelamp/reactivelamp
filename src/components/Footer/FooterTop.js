import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const FooterTopLink = (props) => {
  return (
    <li className="columns small-6 medium-2"><Link style={{color: "#fff"}} to={props.path}>{props.label}</Link></li>
  );
};

FooterTopLink.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

const FooterTop = (props) => {
  const footerLink = (link, index) => {
    return <FooterTopLink path={link.path} key={index} label={link.label} />;
  };

  return (
    <ul style={{listStyle: "none"}} className="row inline-list">
      {props.links.map(footerLink)}
    </ul>
  );
};

FooterTop.propTypes = {
  links: PropTypes.array.isRequired
};

export default FooterTop;