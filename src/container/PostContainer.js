import React from 'react';
import Post from '../components/Post'
import { connect } from 'react-redux';

class PostContainer extends React.Component {
  renderPosts() {
    return this.props.comments.map((item, index) => (
      <Post title={item.title}
            id={item.id}
            contents={item.contents}
            key={index}
      />
    ));
  }

  render() {
    return (
      <div>
        { this.renderPosts() }
      </div>
    );
  }

}

PostContainer.propTypes = {
  data: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      title: React.PropTypes.string,
      id: React.PropTypes.string,
      contents: React.PropTypes.string
    })
  )
};
PostContainer.defaultProps = {
  comments: []
};

export default connect(
  (state) => ({
    comments: state.comments
  })
)(PostContainer);
