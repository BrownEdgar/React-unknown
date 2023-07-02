import { useSelector, useDispatch } from "react-redux";
import { addTodos,deleteTodos } from "../../app/features/todos/todosSlice";
import axios from "../../axios";

 export default function ToTodos() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
      
  const getTodos = () => {
      axios.get('todos').then(res => dispatch(addTodos(res.data)))
  }
  const deleteItem = (id) => {
    dispatch(deleteTodos({ id }))
  }
  
  return (
    <div className="info">
      <button onClick={getTodos}>Todos</button>
      {
        todos.map(todos => (
          <p key={todos.id}>
            Title:{' '} {todos.title} 
            <span onClick={() => deleteItem(todos.id)} className="trash">
              &times;
            </span>
          </p>
        ))
      }
    </div>
  );
};