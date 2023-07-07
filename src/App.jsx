import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getTodos, addTodo } from './app3/features/todoSlice/todoSlice';
import './App.css'

export default function App() {
	const todos = useSelector(state => state.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodos());
	}, []);


const handleSubmit = (e) => {
		e.preventDefault()
		const {userId, userTitle} = e.target
		
		const user = {
			id: userId.value,
			title: userTitle.value
		}
		dispatch(addTodo(user))
	}

	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Write adding id' name="userId"/>
				<input type="text"placeholder='Write adding Title' name="userTitle"/>
				<button type='submit'>Add</button>
			</form>
		{todos.status === "pending" ? (
			<h1>Loading....</h1>
		) : (
			<ul>
			{todos.data.map((elem) => (
				<li key={elem.id}>
				<span>Id : {elem.id}</span>
				<span>Title : {elem.title}</span>
					<span>Title : {elem.completed.toString()}</span>
				</li>
			))}
			</ul>
		)}
	</div>
);
}








// import { addPosts} from './app/features/posts2/postsSlice'
// import { addUsers} from './app/features/posts/users/users.Slice'
// import { addTodos} from './app/features/posts/todos/todosSlice'
//////////////////////////////////////////////////////////////////////////////
// export default function App() {
// 	const sel = useSelector(state => state)
// 	const dispatch = useDispatch()
	
// 	const handleShowPosts = () => {
// 		axios.get('https://jsonplaceholder.typicode.com/posts',{ params: { _limit: 5 } })
// 		.then(res =>dispatch(addPosts(res.data)))
// 	}

// 	const handleShowUsers = () => {
// 		axios.get('https://jsonplaceholder.typicode.com/users',{ params: { _limit: 3 } })
// 		.then(res =>dispatch(addUsers(res.data)))
// 	}
	
// 	const handleShowTodos = () => {
// 		axios.get('https://jsonplaceholder.typicode.com/todos',{ params: { _limit: 3 } })
// 		.then(res =>dispatch(addTodos(res.data)))
// 	}

// 	return (
// 		<div className='glav_div'>
// 			<h1>Redux</h1>
// 			<div className='div_but'>
// 				<button onClick={handleShowPosts}>Add Posts</button>
// 				<button onClick={handleShowUsers}>Add Users</button>
// 				<button onClick={handleShowTodos}>Add Todos</button>
// 			</div>
// 			<div className='div'>{JSON.stringify(sel)}</div>
// 		</div>
// 	)
// }
/////////////////////////////////////////////////
// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import {getCarts, deleteFunc} from './app2/features/carts/cartsSlice'
// import {TiDeleteOutline} from 'react-icons/ti'

// export default function App() {
// 	const sel = useSelector(state => state)
// 	const dispatch = useDispatch()

// 	useEffect(() => {
// 		dispatch(getCarts())
// 	}, [])

// 	const handleDeleteFunc = (id) => {
// 		dispatch(deleteFunc(id))
// 	}

// 	return (
// 		<div className='container'>
// 		{sel.carts.status === "pending" ? (
// 			<h1>Loading....</h1>
// 		) : (
// 			<div className='container'>
// 			{sel.carts.addCarts.map(cart => (
// 				<div key={cart.id} className='div'>
// 				{cart.products.map(product => (
// 					<div key={product.id} className='cart-item'>
// 						<span className='span_delete' onClick={() => handleDeleteFunc(cart.id)}><TiDeleteOutline/></span>
// 					<p className='cart-title'>Title : {product.title}</p>
// 					<p className='cart-price'>Price : {product.price}</p>
// 					<p className='cart-total'>Total : {product.total}</p>
// 					</div>
// 				))}
// 				</div>
// 			))}
// 			</div>
// 		)}
// 		</div>
// 	);
// }