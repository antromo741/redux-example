import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    
    //No longer need component will mount or constructor, we are getting our state from redux, the store
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPosts) {
            this.props.posts.unshift(nextProps.newPosts);
        }
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
    posts: PropTypes.array.isRequired,
    newPosts: PropTypes.object
};


//Using posts because in the root reducer we declare posts
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPosts: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts})(Posts)