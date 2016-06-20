import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>title: { this.props.title }</h1>
        <h2>author: { this.props.id }</h2>
        <p>{ this.props.contents }</p>
      </div>
    );
  }
}

Post.propTypes = {};
Post.defaultProps = {};

export default Post;
