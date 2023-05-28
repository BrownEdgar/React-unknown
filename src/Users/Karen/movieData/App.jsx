import React, { useState } from 'react'
import Show from './Show'
import './App.scss'
import Modal from './Modal'

export default function App() {
	const [data, setData] = useState([
		{
			id: 1,
			title: "Terminator",
			genre: "Action",
			stock: 6,
			rate: 2.5
		},
		{
			id: 2,
			title: "Die Hard",
			genre: "Action",
			stock: 5,
			rate: 2.5
		},
		{
			id: 3,
			title: "Get Out",
			genre: "Thriller",
			stock: 8,
			rate: 3.5
		},
		{
			id: 4,
			title: "Trip to Italy",
			genre: "Comedy",
			stock: 7,
			rate: 3.5
		},
		{
			id: 5,
			title: "Airplane",
			genre: "Comedy",
			stock: 7,
			rate: 3.5
		},
	])
	const [bool, setBool] = useState(false)
	const [id, setId] = useState(null)

	const cancelFunc = (id) => {
		setId(id)
		setBool(!bool)
	}
	const secondClick = () => {
		setData(data.toSorted((a, b) => b.rate - a.rate))
	}
	const deleteFunc = () => {
		if (setId) {
			const fin = data.filter(elem => elem.id !== id)
			setBool(false)
			setData(fin)
		}
	}
	return (
		<div className='Big'>
			<Show data={data} cancelFunc={cancelFunc} secondClick={secondClick} />
			{
				bool && <Modal cancelFunc={cancelFunc} deleteFunc={deleteFunc}>
					<h1>Are you sure ?</h1>
				</Modal>
			}
		</div>
	)
}