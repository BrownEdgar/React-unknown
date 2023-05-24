import React, { useState } from 'react'
import Modal from './UI/Modal/Modal'


export default function App() {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(2)
	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div>
			<button onClick={handleClick}>open mmodal</button>

			{/* {
				isOpen && <Modal>
					<h1>my first modal</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt sit dolores rerum non facilis quidem veritatis quae corporis quam.</p>
					<button onClick={handleClick}>close mmodal</button>
				</Modal>
			} */}


			{
				isOpen && <Modal closeModal={handleClick} >
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem laudantium natus facilis omnis ullam ducimus quam mollitia! Ad, eius quas.</p>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem laudantium natus facilis omnis ullam ducimus quam mollitia! Ad, eius quas.</p>

					
				</Modal>
			}
		</div>
	)
}
