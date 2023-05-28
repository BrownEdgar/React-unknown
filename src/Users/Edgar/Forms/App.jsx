import React, { useState } from 'react'
import MyForm from './MyForm'

import "./App.scss"

export default function App() {
	const [users, setUsers] = useState([])

	const handleSubmit = (e) => { 
		e.preventDefault()

		const { languages, username, lastname } = e.target.elements;
		const user = {
			id: new Date().getTime(),
			languages: languages.value,
			username: username.value,
			lastname: lastname.value,
			registredDate: new Date()
		}

		checkEmail()
		setUsers([...users, user])
		e.target.reset();
	}
	return (
		<div>
			<h1>Welcome to <span>SMARTCODE</span></h1>
			<MyForm handleSubmit={handleSubmit}/>
				<pre>
					{JSON.stringify(users, null, 3)}
				</pre>
		</div>
	)
}
