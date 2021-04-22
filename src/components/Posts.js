import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    
    //No longer need component will mount or constructor, we are getting our state from redux, the store
    componentWillMount() {
        this.props.fetchPosts();
    }
    render() {

        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ));

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};


//Using posts because in the root reducer we declare posts
const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, {fetchPosts})(Posts)