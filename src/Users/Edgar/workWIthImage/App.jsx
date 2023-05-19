import { useState, useEffect } from 'react'

import axios from 'axios'
import Products from './Products'

export default function App() {

	// const [products, setProducts] = useState([])
	const [post, setPost] = useState({})
	const [currentId, setCurrentId] = useState(1)

	// useEffect(() => {
	// 		axios({
	// 			url: 'https://fakestoreapi.com/products'
	// 		}).then(res => setProducts(res.data))
	// }, [])
	useEffect(() => {

		axios(`https://jsonplaceholder.typicode.com/posts/${currentId}`)
			.then(res => setPost(res.data))


	}, [currentId])


	return (
		<div>
			<h2>{currentId}</h2>
			{/* <Products products={products}/> */}
			<pre>
				{JSON.stringify(post, null, 1)}
			</pre>
			<button onClick={() => setCurrentId(currentId + 1)} disabled={currentId === 100}>next</button>
			<button onClick={() => setCurrentId(1)} >reset</button>

		</div>
	)
}



