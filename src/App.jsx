import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { addUser } from './app/features/test/testSlice'
import { addTodos, getAsyncTodos } from './app/features/todos/todosSlice'

import './App.css'
import { my_action } from './app/features/users/usersSlice';

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
	const addTodo = () => {
		dispatch(addTodos({
			id: 1,
			name: 'Jhon'
		},
		))
	}

	const changeName = () => {
		dispatch(my_action({ username: "Lilith" , todoError: "Lorem, ipsum dolor."}))
	}

	useEffect(() => {
		dispatch(getAsyncTodos('https://jsonplaceholder.typicode.com/todos'))
	}, [])


	return (
		<>
			<div>
				<h1>Hello users</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" name="username" />
					<input type="submit" value='add user' />
				</form>

				<>
					<button onClick={addTodo}>Add</button>
			
				</>
				<button onClick={changeName}>change name</button>

			</div>
		</>
	)
}

export default App
