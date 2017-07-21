import React from 'react';
import { Link } from 'react-router';
import {
  Row,
  Column
} from 'react-foundation';
import PropTypes from 'prop-types';

const BlogItem = (props) => {
  return (
    <Row>
      <Column small={12} medium={2}>
        <img src={`${props.backend.path}:${props.backend.port}${props.blog.image}`} />
      </Column>
      <Column small={12} medium={10}>
        <h3><Link to={{pathname: `${props.blog.path}`, state: `${props.blog.nid}`}}>{props.blog.title}</Link></h3>
        <p>{props.blog.body}</p>
      </Column>
    </Row>
  );
};

BlogItem.propTypes = {
  backend: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired
};

export default BlogItem;