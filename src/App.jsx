import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser } from './app/features/test/testSlice'
import { addTodos, getAsyncTodos } from './app/features/todos/todosSlice'

import './App.css'

function App() {

	const users = useSelector(state => state.todos)
	const dispatch = useDispatch()
	const handleSubmit = (e) => {  
		e.preventDefault();
		const { username } = e.target;
		const user = {
			name: username.value
		}
		dispatch(addUser(user))
	}
	const addTodo = () =>{
		dispatch(addTodos({
			id:1,
			name:'Jhon'
		},
		))
	}

	useEffect(() => {
		dispatch(getAsyncTodos('https://jsonplaceholder.typicode.com/todos'))
	}, [])
	

	return (
		<>
			<div>
				<h1>Hello users</h1>
					<form onSubmit={handleSubmit}>
					<input type="text" name="username"/>
					<input type="submit" value='add user' />
					</form>

						<>
						<button onClick={addTodo}>Add</button>
							<pre>
								{JSON.stringify(users.data, null, 1)}
							</pre>
						</>
		

			</div>
		</>
	)
}

export default App
