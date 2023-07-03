import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {deleteUser } from './app/features/users/usersSlice';
import { addTodos } from './app/features/todos/todosSlice';
import axios from 'axios';

import './App.css'

function App() {
	const users = useSelector(state => state)
	const todos = useSelector(state => state.todos)
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(deleteUser({id:1}))
	}

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => dispatch(addTodos(res.data)))
	}, [])
	

	return (
		<>
			<div>
				<h1>Hello redux</h1>
				<pre>
					{JSON.stringify(todos,null,1)}
				</pre>
				<button onClick={handleClick}>add user</button>
			</div>
		</>
	)
}

export default App
