import axios from 'axios';
import { useEffect, useState } from 'react';
import Todos from './Todos';
import './App.css'
import Modal from './Modal';

export default function App() {
	const [itemId, setItemId] = useState()
	const [isOpen, setIsOpen] = useState(false)
	const [todos, setTodos] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: 10
			}
		})
			.then(res => setTodos(res.data))
	}, [])

	const toggleModal = () => setIsOpen(!isOpen)

	const setId = (id) => setItemId(id);

	const deleteTodo = () => {
		const newList = todos.filter(elem => elem.id !== itemId);
		setTodos(newList)
	}


	return (
		<>
			{
				isOpen && <Modal toggleModal={toggleModal} deleteTodo={deleteTodo} />
			}
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Title</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo => {
						return (
							<Todos
								key={todo.id}
								todo={todo}
								setId={setId}
								toggleModal={toggleModal} />
						)
					})}
				</tbody>
			</table>
		</>
	)
}