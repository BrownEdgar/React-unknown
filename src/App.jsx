import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import {deleteUser } from './app/features/users/usersSlice';
import { addTodos, getAsyncTodos } from './app/features/todos/todosSlice';


import './App.css'

function App() {

	const todos = useSelector(state => state.todos)
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(deleteUser({id:1}))
	}

	useEffect(() => {

		// 
		dispatch(addTodos())
		
	}, [])
	
	const myFunction = () => {  
		dispatch(getAsyncTodos('https://jsonplaceholder.typicode.com/todos'))
	}

	return (
		<>
			<div>
				<h1>Hello redux</h1>
				{
					todos.status === 'pending' ? <h1>loaging...</h1> : (
						<>
						<pre>
							{JSON.stringify(todos,null,1)}
						</pre>
						</>
					)
				}
				<button onClick={myFunction}>add user</button>
			</div>
		</>
	)
}

export default App
