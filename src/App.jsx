import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { addPosts} from './app/features/posts2/postsSlice'
import { addUsers} from './app/features/posts/users/users.Slice'
import { addTodos} from './app/features/posts/todos/todosSlice'
import './App.css'

export default function App() {
	const sel = useSelector(state => state)
	const dispatch = useDispatch()
	
	const handleShowPosts = () => {
		axios.get('https://jsonplaceholder.typicode.com/posts',{ params: { _limit: 5 } })
		.then(res =>dispatch(addPosts(res.data)))
	}

	const handleShowUsers = () => {
		axios.get('https://jsonplaceholder.typicode.com/users',{ params: { _limit: 3 } })
		.then(res =>dispatch(addUsers(res.data)))
	}
	
	const handleShowTodos = () => {
		axios.get('https://jsonplaceholder.typicode.com/todos',{ params: { _limit: 3 } })
		.then(res =>dispatch(addTodos(res.data)))
	}

	return (
		<div className='glav_div'>
			<h1>Redux</h1>
			<div className='div_but'>
				<button onClick={handleShowPosts}>Add Posts</button>
				<button onClick={handleShowUsers}>Add Users</button>
				<button onClick={handleShowTodos}>Add Todos</button>
			</div>
			<div className='div'>{JSON.stringify(sel)}</div>
		</div>
	)
}
