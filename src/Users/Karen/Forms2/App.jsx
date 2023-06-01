import React, { useState } from 'react'
import data from './data.json'

import MyForm from './MyForm'
import Users from './Users'
import './App.scss'

export default function App() {
	const [users, setUsers] = useState(data)
	const [del, setDell] = useState(true)
	const [genderType, setGenderType] = useState('')




	const handleSubmit = (e) => {
		e.preventDefault();
		const {
			username,
			lastname,
			email,
			cities,
			female,
			male,
		} = e.target;

		const newUser = {
			id: Date.now(),
			first_name: username.value,
			last_name: lastname.value,
			email: email.value,
			gender: (female.checked && female.value)
				|| (male.checked && male.value),
			ip_address: cities.value,
		}
		setUsers([...users, newUser]);
		e.target.reset()
	}

	const handleDelete = (id) => {
		const filtered = users.filter(elem => elem.id !== id);
		setUsers(filtered)
	}

	const toSortFunc = (field) => {
		const sorted = users.toSorted((a, b) => {
			return a[field] > b[field] ? 1 : -1
		})

		setUsers(sorted)
	}

	const clearAllFunc = () => {
		const event = !del;
		setUsers(event ? data : []);
		setDell(event)
	}

	const handleFemail = () => {
		
		if (genderType) {
			return users.filter(element => element.gender === genderType)
		}
		return users;
	}


	return (
		<div className='wrapper'>
			<header>
				<button className='cleare_but' onClick={clearAllFunc}>{del ? "Clear all" : "To Return"}</button>
				<span className='span_user'>Users Count : <span className='span_count'>{users.length}</span></span>
			</header>
			<div className="wrapper-form">
				<MyForm handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper-table">
				<Users 
				users={handleFemail()} 
				handleDelete={handleDelete} 
				toSortFunc={toSortFunc}
				setGenderType={setGenderType} />
			</div>
		</div>
	)
}