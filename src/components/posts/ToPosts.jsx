import { useSelector, useDispatch } from "react-redux";
import { addPost,closPost } from "../../app/features/posts/postsSlice";
import axios from "../../axios";

 export default function ToPosts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const getPosts = () => {
        axios.get('posts').then(res => dispatch(addPost(res.data)))
    }

    const closPosts = () => dispatch(closPost())

    return (
      <div className="info">
        {posts.length > 0 
          ? <button onClick={closPosts}>Close Posts</button>
          : <button onClick={getPosts}>Open Posts</button>}
        {
          posts.map(posts => (
            <p key={posts.id}>
              Title:{' '} {posts.title} 
            </p>
          ))
        }
      </div>
    );
};