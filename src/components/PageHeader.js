import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import PropTypes from 'prop-types';

const PageHeader = (props) => {
  return (
    <div style={{position: "relative", marginBottom: "40px"}}>
      <div style={heroText}>
        <Row>
          <Column small={12}>
            <h1 style={heroH1}>{props.title}</h1>
            <p style={{fontSize: "1.125rem"}}>{props.intro}</p>
          </Column>
        </Row>
      </div>
      <img style={{width: "100%"}} src={`/images/${props.image}`} />
    </div>
  );
};

const heroText = {
  color: "#fff",
  textAlign: "center",
  position: "absolute",
  bottom: "2em",
  width: "100%",
  zIndex: 1,
  padding: "0 .625rem"
};

const heroH1 = {
  textShadow: "0 0 3px #000",
  textTransform: "uppercase",
  fontSize: "2.625rem",
  fontWeight: 800
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};

export default PageHeader;