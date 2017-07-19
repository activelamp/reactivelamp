import React from 'react';
import PropTypes from 'prop-types';
import BlogItem from './BlogItem';

const BlogList = (props) => {
  const blogRow = (blog, index) => {
    return <BlogItem backend={props.backend} key={index} blog={blog} />;
  };

  return (
    <div>
      {props.blogItems.map(blogRow)}
    </div>
  );
};

BlogList.propTypes = {
  backend: PropTypes.object.isRequired,
  blogItems: PropTypes.array.isRequired
};

export default BlogList;