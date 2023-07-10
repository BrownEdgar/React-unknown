import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './app4/userSlice/userSlice';
import './App.css'

export default function App() {
	const users = useSelector(state => state.user)
	const dispatch = useDispatch()

const handleSubmit = (e) => {
		e.preventDefault()
		const {userId, userName, userAddress, userPhone, userEmail} = e.target
		
		const user = {
			id: userId.value,
			name: userName.value,
			contact : {
				address: userAddress.value,
				phone: userPhone.value,
				email: userEmail.value
			},
			date: new Date().toLocaleDateString().toString()
		}
		dispatch(addUser(user))
	}
	return (
		<div className='container'>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Write adding id' name="userId"/>
				<input type="text"placeholder='Write adding username' name="userName"/>
				<input type="text"placeholder='Write adding user address' name="userAddress"/>
				<input type="text"placeholder='Write adding user phone' name="userPhone"/>
				<input type="email" placeholder='Write adding user email' name="userEmail"/>
				<button type='submit'>Add</button>
			</form>
			{users.map(elem => {
				return <ul key={elem.id}>
					<li>User id : {elem.id}</li>
					<li>User name : {elem.name}</li>
					<li>User address : {elem.contact.address}</li>
					<li>User phone : {elem.contact.phone}</li>
					<li>User email : {elem.contact.email}</li>
					<li>User date: {elem.date}</li>
				</ul>
			})}
		
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

//////////////////////////////////////////////////////////////////////////////////////
// import { useSelector, useDispatch } from 'react-redux'
// import { useEffect } from 'react';
// import { getTodos, addTodo } from './app3/features/todoSlice/todoSlice';
// import './App.css'

// export default function App() {
// 	const todos = useSelector(state => state.todos)
// 	const dispatch = useDispatch()

// 	useEffect(() => {
// 		dispatch(getTodos());
// 	}, []);


// const handleSubmit = (e) => {
// 		e.preventDefault()
// 		const {userId, userTitle} = e.target
		
// 		const user = {
// 			id: userId.value,
// 			title: userTitle.value
// 		}
// 		dispatch(addTodo(user))
// 	}

// 	return (
// 		<div className='container'>
// 			<form onSubmit={handleSubmit}>
// 				<input type="text" placeholder='Write adding id' name="userId"/>
// 				<input type="text"placeholder='Write adding Title' name="userTitle"/>
// 				<button type='submit'>Add</button>
// 			</form>
// 		{todos.status === "pending" ? (
// 			<h1>Loading....</h1>
// 		) : (
// 			<ul>
// 			{todos.data.map((elem) => (
// 				<li key={elem.id}>
// 				<span>Id : {elem.id}</span>
// 				<span>Title : {elem.title}</span>
// 					<span>Title : {elem.completed.toString()}</span>
// 				</li>
// 			))}
// 			</ul>
// 		)}
// 	</div>
// );
// }