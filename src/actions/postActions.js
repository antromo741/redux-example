import { FETCH_POSTS, NEW_POST} from './types';
//gets reduced in post reducer
export function fetchPosts() {
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({ 
                type: FETCH_POSTS,
                payload: posts
             }));
    }
}