import { useReducer } from "react";
import reducer, { initialState } from './reducer';
import { ADD_SHUFFLE, ADD_POSTS, DELETE_POST, ADD_ID, ADD_DEVELOPER } from "./actionTypes";
import axios from "axios";
import { BsFillTrashFill } from "react-icons/bs";
import MyForm from "./MyForm";
import './App.scss';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => dispatch({ type: ADD_POSTS, payload: res.data }));
  };

  const handleShuffle = () => {
    dispatch({ type: ADD_SHUFFLE });
  };
  
  const handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    dispatch({ type: ADD_DEVELOPER, payload: name })
    resetForm();
  }

  const handleDelete = (id) => {
		dispatch ({ type: DELETE_POST,payload:id});
	}

  const handleChange = () => {
      dispatch({ type: ADD_ID});
  };

  return (
    <div className="container">
      <h1 className="actions">Actions: {state.actions}</h1>
      <MyForm handleSubmit={handleSubmit}/>
      <h1 className="developers">Developers: {state.developers + ''}</h1>
      <h1 className="array">Array: {JSON.stringify(state.arr)}</h1>
      <div className="btn-group">
        <button onClick={handlePosts} >Load Posts</button>
        <button onClick={handleShuffle} >Shuffle</button>
        <button onClick={handleChange} >Change ID</button>
      </div>
      
      <div className="items">
        {state.posts.map(post => (
          <div key={post.id} className="post" >
            <p>
              ID: {post.id} 
              <BsFillTrashFill onClick={() => handleDelete(post.id)} className="delete-icon" />
            </p>
            <h3>Title: {post.title}</h3>
            <p>Body: {post.body}</p>
          </div>
        ))}
      </div>
</div>

  );
}
