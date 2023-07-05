import { useSelector, useDispatch } from "react-redux";
import { addComment,closeComment } from "../../app/features/comments/commentsSlice";
import axios from "../../axios";

  export default function ToComments() {
    const comments = useSelector(state => state.comments)
    const dispatch = useDispatch()

    const getComments = () => {
      axios.get('comments').then(res => dispatch(addComment(res.data)))
      }

    const closCom = () => dispatch(closeComment())
    
  return (
    <div className="info">
      {comments.length > 0 
        ? <button onClick={closCom}>Close Comments</button>
        : <button onClick={getComments}>Open Comments</button>}
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