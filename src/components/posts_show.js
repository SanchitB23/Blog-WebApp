import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost} from '../actions';
import {deletePost} from '../actions';

class PostsShow extends Component{
  componentDidMount(){
      const {id} = this.props.match.params;
      this.props.fetchPost(id);
  }
  onClickDelete(){
    const {id} = this.props.match.params;
    this.props.deletePost(id,() =>{
      this.props.history.push('/');
    });
  }
  render() {
    const {post}=this.props;
    console.log(post);
    if (!post) {
      return <div>loading..</div>;
    }
    return (
      <div>
        <Link to='/'>Go to HomePage</Link>
        <button className='btn btn-danger pull-xs-right'
          onClick={this.onClickDelete.bind(this)}
          >
            Delete Post
        </button>
        <h3>{post.title}</h3>
        <h5>Categories: {post.categories}</h5>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({posts},ownProps) {
  return {  post:posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);
//mapstatetoprops shortcut es6
