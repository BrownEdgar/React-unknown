import { useLoaderData } from 'react-router-dom'

export default function About() {
	const todos = useLoaderData();
	console.log(todos)
	return (
		<div>
			<h1>About page </h1>
		</div>
	)
}

const todoLoader = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
	return res.json()
}
export { todoLoader }