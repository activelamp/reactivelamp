import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blogActions from '../actions/blogActions';
import BlogBody from '../components/Blog/BlogBody';
import PageHeader from '../components/PageHeader';
import PropTypes from 'prop-types';
import { gql, graphql, compose } from 'react-apollo';

const query = gql`
  query node($id: String!) {
    nodeById(id: $id, language: en) {
      ... on NodeBlog {
        title
        body {
          value
        }
        image:fieldImage {
          url
        }
      }
    }
  }
`;

const BlogItemPage = ({blog}) => {
  console.log(blog);
  return (
    <div>
      <PageHeader
        title="ActiveLAMP Blog"
        intro="Thoughts, Perspectives, and Musings of technology from the people at ActiveLAMP."
        image="blog-1200.jpg"
      />
      <Row>
        <Column>
          <BlogBody blog={blog} />
        </Column>
      </Row>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    backend: state.backend
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(blogActions, dispatch)
  };
}

BlogItemPage.propTypes = {
  backend: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query, {
    options: (props) => ({
      variables: {
        id: typeof props.location.state !== 'undefined' ? props.location.state : "101"
      }
    }),
    props: ({data: { nodeById }}) => ({
      blog: nodeById
    })
  })
)(BlogItemPage);
