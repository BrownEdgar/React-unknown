import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Show from "./Show"
import Modal from './Modal'
import Button from './Button'

export default function App() {
	const [data, setData] = useState([])
	const [bool, setBool] = useState(false)
	const [id, setId] = useState()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: 3,
			}
		}).then(res => setData(res.data))
	}, [])

	const handleClick = (id) => {
		setBool(!bool)
		setId(id)

	}

	const deleteFunc = () => {

		if (setId) {
			const del = data.filter(elem => elem.id !== id)
			setBool(false)
			setData(del)
		}
	}


	return (
		<div className='big'>
			<Show data={data} handleClick={handleClick} />
			{
				bool && <Modal>
					<h2>Are you sure?</h2>
					<Button variant="dark" handleClick={handleClick}>
						<p>Cancel</p>
					</Button>
					<Button variant="light" handleClick={deleteFunc}>
						Delete
					</Button>
				</Modal>
			}
		</div>
	)
}