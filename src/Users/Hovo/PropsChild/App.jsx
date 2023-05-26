import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from './UI/Button/Button';
import Modal from './Modal/Modal';
import Component from './Component';
import './App.scss'


export default function App() {
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [selectId, setSelectId] = useState();


	const clicked = (id) => {
		setSelectId(id);
		setIsOpen(!isOpen);
	}

	const deleteAccount = () => {
		if (selectId) {
			const updatedData = data.filter(user => user.id !== selectId);
			setData(updatedData);
		}
		setIsOpen(!isOpen);
	}

	useEffect(() => {
		axios('https://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: 12,
			}
		})
			.then(res => setData(res.data))
	}, [])

	return (
		<div className="Todo">

			<Component data={data} clicked={clicked} />

			{isOpen && (
				<Modal>
					<h1>Warning</h1>
					<p>Your account will be permanently deleted</p>
					<div className="Todo__Deleted">
						<Button
							title="Stay With Us 😊"
							variant="dark-animated"
							size="lg"
							border="bordered"
							clicked={clicked}
						/>
						<Button
							title="Delete Account"
							variant="warn"
							size="lg"
							clicked={deleteAccount}
						/>
					</div>
				</Modal>
			)}
		</div>
	);
}