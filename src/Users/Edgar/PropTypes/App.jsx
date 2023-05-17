import axios from 'axios'
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import Component from './Component';


export default function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
			.then(res => setData(res.data))
	}, [])

	return (
		<div>
			<Component title='my title' gender={"male"}/>
			<Component  />
			<TodoList data={data} name={"React.js"} />
		</div>
	)
}
