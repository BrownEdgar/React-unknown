import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../app/features/comments/commentsSlice";
import axios from "../../axios";

  export default function ToComments() {
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()

    const getComments = () => {
      axios.get('comments').then(res => dispatch(addComment(res.data)))
      }
    
  return (
    <div className="info">
      <button onClick={getComments}>Comments</button>
      {
        comments.map(comments => (
          <p key={comments.id}>
            Name:{' '} {comments.name}
          </p>
        ))
      }
    </div>
  );
};