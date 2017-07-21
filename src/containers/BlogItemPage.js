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

// Since this component is simple and static, there's no parent container for it.
export class BlogItemPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      blog: typeof drupalSettings.blog !== 'undefined' ? drupalSettings.blog : null,
      nid: props.location.state
    };
  }

  componentDidMount() {
    if (this.state.blog) {
      return;
    }

    fetch(`${this.props.backend.path}:${this.props.backend.port}/api/blog-item/${this.state.nid}?_format=hal_json`, {
      method: "GET"
    })
      .then(res => {
        return res.json().then(blog => {
          this.setState({blog: blog[0]});
        });
      }).catch(error => {
        throw(error);
      });
  }

  render() {
    return (
      <div>
        <PageHeader
          title="ActiveLAMP Blog"
          intro="Thoughts, Perspectives, and Musings of technology from the people at ActiveLAMP."
          image="blog-1200.jpg"
        />
        <Row>
          <Column>
            <BlogBody blog={this.state.blog} />
          </Column>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    backend: state.backend,
    blog: state.blog.blog
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItemPage);
