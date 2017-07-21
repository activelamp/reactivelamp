import React from 'react';
import PropTypes from 'prop-types';

const BlogBody = (props) => {

  if (props.blog) {
    return (
      <div>
        <h1>{props.blog.title}</h1>
        <p>{props.blog.body}</p>
      </div>
    );
  } else {
    return (
      <h1>Loading</h1>
    );
  }
};

BlogBody.propTypes = {
  blog: PropTypes.object.isRequired
};

export default BlogBody;