import { useSelector, useDispatch } from 'react-redux'



import './App.css'
import { addUser } from './app/features/test/testSlice'
import { addTodos } from './app/features/todos/todosSlice'

function App() {

	const users = useSelector(state => state.test)
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
								{JSON.stringify(users, null, 1)}
							</pre>
						</>
		

			</div>
		</>
	)
}

export default App
