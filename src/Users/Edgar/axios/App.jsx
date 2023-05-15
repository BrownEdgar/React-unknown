import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			const response = await axios('https://jsonplaceholder.typicode.com/posts')
			const data = response.data;
			setData(data)
		}
		getData()
	

		// axios('https://jsonplaceholder.typicode.com/posts', {
		// 	params: {
		// 		_limit: 10,
		// 		_start: 41
		// 	}
		// })
		// 	.then(res => setData(res.data))

		// axios.get('https://jsonplaceholder.typicode.com/posts/1')
		// 	.then(res => console.log(res))
		// axios({
		// 	url:'https://jsonplaceholder.typicode.com/posts',
		// 	method: 'get',
		// 	timeout: 1000
		// }).then(res => console.log(res))

		// axios({
		// 	baseURL: 'https://jsonplaceholder.typicode.com',
		// 	url: '/todos'
		// }).then(res => console.log(res))


		// axios.all([
		// 	axios('https://jsonplaceholder.typicode.com/posts'),
		// 	axios('https://jsonplaceholder.typicode.com/todos'),
		// ]).then(([posts, todos]) => {
		// 	console.log({
		// 		posts: posts.data,
		// 		todos: todos.data,
		// 	})
		// })

		// axios('/users').then(res => console.log(res.data))
	}, [])
	

	return (
		<div>
			{
				data.map((post) => {
					return (
						<div key={post.id}>
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
				)
				})
			}
		</div>
	)
}

export default App
