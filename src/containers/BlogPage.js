import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as blogActions from '../actions/blogActions';
import BlogList from '../components/Blog/BlogList';
import PageHeader from '../components/PageHeader';
import PropTypes from 'prop-types';
import { gql, graphql, compose } from 'react-apollo';

const query = gql`
  query blogQuery($offset: Int!, $limit: Int!) {
    nodeQuery(offset: $offset, limit: $limit) {
      entities {
        ... on NodeBlog {
          id:entityId
          title
          created
          url:entityUrl {
            path
          }
          tag:fieldTag {
            label:entityLabel
          }
          image:fieldImage {
            url
            title
            alt
          }
          uid
          body {
            summary
          }
        }
      }
    }
  }
`;

const BlogPage = ({ blogItems, backend }) => {
  if (typeof blogItems === 'undefined') return null;
  return (
    <div>
      <PageHeader
        title="Our Thoughts, Perspectives, and Musings on Technology"
        intro="We share knowledge, ideas and ambitions openly, constantly improving and critiquing our ideas in the larger community."
        image="musings-1440.jpg"
      />
      <Row>
        <Column>
          <BlogList backend={backend} blogItems={blogItems} />
        </Column>
      </Row>
    </div>
  );
}

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

BlogPage.propTypes = {
  actions: PropTypes.object.isRequired,
  backend: PropTypes.object.isRequired
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(query, {
    options: (props) => ({
      variables: {
        offset: 0,
        limit: 10
      },
    }),
    props: ({ data: { nodeQuery }}) => ({
      blogItems: nodeQuery && nodeQuery.entities
    }),
  })
)(BlogPage);
