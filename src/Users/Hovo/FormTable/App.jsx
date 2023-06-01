import React, { useState } from 'react'
import data from './data.json'
import './App.scss'
import MyForm from './MyForm'
import Users from './Users'

export default function App() {
	const [users, setUsers] = useState(data)

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

	const handleClear = () => {
		setUsers([])
	}

	const handleSorted = (state, value) => {
		const sorted = [...users]
		if (state) {
			sorted.sort((a, b) => a[value].localeCompare(b[value]));
		} else {
			sorted.sort((a, b) => b[value].localeCompare(a[value]));
		}
		setUsers(sorted)
	}

	const filteredGender = (gender) => {
		const fill = data.filter(user => user.gender === gender);
		setUsers(fill)
	}

	return (
		<div className='wrapper'>
			<header>
				<p>Users <span>{users.length}</span></p>
			</header>
			<div className="wrapper-form">
				<MyForm handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper-table">
				<Users
					users={users}
					handleDelete={handleDelete}
					handleClear={handleClear}
					handleSorted={handleSorted}
					filteredGender={filteredGender}
				/>
			</div>
		</div>
	)
}
