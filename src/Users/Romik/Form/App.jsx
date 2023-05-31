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
		setUsers([...users,newUser]);
		e.target.reset()
	}

	const handleDelete = (id) => { 
		const filtered = users.filter(elem =>elem.id !== id);
		setUsers(filtered)
	}

    const sortData = (text) => {
        const sorted = users.sort((a, b) => {
            if (a[text] < b[text]) {
              return -1;
            }
            if (a[text] > b[text]) {
              return 1;
            }
            return 0;
          })
        console.log(sorted);
        setUsers([...sorted])
    }
	return (
		<div className='wrapper'>
			<header></header>
			<div className="wrapper-form">
				<MyForm handleSubmit={handleSubmit} />
			</div>
			<div className="wrapper-table">
				<Users users={users} handleDelete={handleDelete} sortData={sortData}/>
			</div>
		</div>
	)
}
