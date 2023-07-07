import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { getAsyncTodos, addTodos } from './store/features/todos/todosSlice'


export default function App() {
  const todos = useSelector(state => state.todos) 
  const dispatch = useDispatch()


  useEffect(() => {
   dispatch(getAsyncTodos('https://jsonplholder.typicode.com/tdos'))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    const {title} = e.target
    const newTodo = {
      id: Date.now(),
      title: title.value
    }
    dispatch(addTodos(newTodo))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id='title'/>
        <button type='submit'>add todo</button>
      </form>
			<pre>
				{JSON.stringify(todos,null,1)}
			</pre>
    </div>
  )
}