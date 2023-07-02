import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../../app/features/posts/postsSlice";
import axios from "../../axios";

 export default function ToPosts() {

    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const getPosts = () => {
        axios.get('posts').then(res => dispatch(addPost(res.data)))
    }

    return (
      <div className="info">
        <button onClick={getPosts}>Posts</button>
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