import { useReducer } from "react";
import reducer, { initialState } from './reducer';
import { ADD_SHUFFLE, ADD_POSTS, ADD_DEVELOPER } from "./actionTypes";
import axios from "axios";
import * as yup from 'yup';
import { Formik, Form, Field } from "formik";
import { BsFillTrashFill } from "react-icons/bs";
import './App.scss';

const validationSchema = yup.object({
  name: yup.string().required(),
});

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
		const filtered = state.posts.filter(elem => elem.id !== id);
		dispatch ({ type: ADD_POSTS, payload: filtered });
	}

  const handleChange = () => {
    const changeId = state.posts.map((post, index) => ({...post,id: state.arr[index]}));
      dispatch({ type: ADD_POSTS, payload: changeId});
  };

  return (
    <div className="container">
  <h1 className="actions">Actions: {state.actions}</h1>
  <Formik
    initialValues={{ name: '' }}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        type='text'
        id='name'
        name='name'
        placeholder='Enter your name'
        className="input-field"
      />
      <input type="submit" value="Submit" className="submit-btn" />
    </Form>
  </Formik>
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
