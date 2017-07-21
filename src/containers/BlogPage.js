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

// Since this component is simple and static, there's no parent container for it.
export class BlogPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if (this.props.blogItems.length === 0) {
      this.props.actions.getBlogItems(this.props.backend);
    }
  }

  render() {
    return (
      <div>
        <PageHeader
          title="Our Thoughts, Perspectives, and Musings on Technology"
          intro="We share knowledge, ideas and ambitions openly, constantly improving and critiquing our ideas in the larger community."
          image="musings-1440.jpg"
        />
        <Row>
          <Column>
            <BlogList backend={this.props.backend} blogItems={this.props.blogItems} />
          </Column>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backend: state.backend,
    blogItems: state.blog.blogItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(blogActions, dispatch)
  };
}

BlogPage.propTypes = {
  actions: PropTypes.object.isRequired,
  backend: PropTypes.object.isRequired,
  blogItems: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPage);
