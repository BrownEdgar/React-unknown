import React, { useState } from 'react'
import data from './data.json'
import MyForm from './MyForm'
import Users from './Users'
import './App.scss'

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

	const [editableID, setEditableID] = useState(null)

	const seteditableIdAction = (userId) => {
		setEditableID(userId)
	}

	const EditableHandleSubmit = (e, id) => {
		seteditableIdAction(0)
		e.preventDefault();
		const { first_name, last_name, email, gender, ip_address } = e.target;
		const currentUserIndex = users.findIndex(user => user.id === id)

		const newUser = {
			id,
			first_name: first_name.value || users[currentUserIndex].first_name,
			last_name: last_name.value || users[currentUserIndex].last_name,
			email: email.value || users[currentUserIndex].email,
			gender: gender.value || users[currentUserIndex].gender,
			ip_address: ip_address.value || users[currentUserIndex].ip_address,
		}
		setUsers(users.with(currentUserIndex, newUser)) // 1
	}

	return (
		<div className='wrapper'>
			<header>
				<button className='delButton' onClick={handleClear}>Clear All</button>
				<p>Users <span>{users.length}</span></p>
			</header>
			<div className="wrapper-form">
				<MyForm handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper-table">
				<Users
					users={users}
					handleDelete={handleDelete}
					handleSorted={handleSorted}
					filteredGender={filteredGender}
					handleSubmit={EditableHandleSubmit}
					editableID={editableID}
					seteditableIdAction={seteditableIdAction}
				/>
			</div>
		</div>
	)
}