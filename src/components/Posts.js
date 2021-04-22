import React, { Component } from 'react'

class Posts extends Component {
    
    //No longer need component will mount or constructor, we are getting our state from redux, the store
    
    render() {

        const postItems = this.state.posts.map(post => (
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

export default Posts