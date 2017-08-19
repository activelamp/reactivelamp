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
      <Column small={12} medium={12}>
        <img src={`${props.blog.image.url}`} />
      </Column>
      <Column small={12} medium={12}>
        <h3><Link to={{pathname: `${props.blog.url.path}`, state: `${props.blog.id}`}}>{props.blog.title}</Link></h3>
        <p>{props.blog.created}</p>
        <p>{props.blog.body.summary}</p>
      </Column>
    </Row>
  );
};

BlogItem.propTypes = {
  backend: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired
};

export default BlogItem;