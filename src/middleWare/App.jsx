import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncCart, addTodos } from './app/features/todos/todosSlice';

import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);

  useEffect(() => {
    dispatch(getAsyncCart('https://jsonplaceholder.typicode.com/todos?_limit=5'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, name } = e.target;
    const newTodo = {
      id: id.value,
      title: name.value,
    };
    dispatch(addTodos(newTodo));
  };

 
return (
  <div className="App">
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="id" />
        <input type="text" name="name" />
        <input type="submit" />
      </form>
      <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
        <p className="todo-details">
          ID: {todo.id}<br/>
          Title: {todo.title}<br/>
        </p>
      </li>
        ))}
      </ul>
    </div>
  </div>
  );
}
