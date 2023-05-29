import React, { useState } from 'react'
import Form from './Form'
import "../../Edgar/Forms/App.scss"

export default function App() {
	const [users, setUsers] = useState([])
	const [reactCount, setReactCount] = useState(0)
	const [disable, setDisable] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		const { languages, username, lastname, email } = e.target.elements;
		const isEmailExist = users.find(user => email.value === user.email);
		if (isEmailExist) return;
		if (languages.value == 'react') {
			setReactCount(reactCount + 1)
		}
		if (reactCount + 1 == 5) {
			setDisable(true)
		}

		const user = {
			id: new Date().getTime(),
			languages: languages.value,
			username: username.value,
			lastname: lastname.value,
			email: email.value,
			registredDate: new Date()
		};
		setUsers([...users, user])
		e.target.reset();
	}
	return (
		<div>
			<h1>Welcome to <span>SMARTCODE</span></h1>
			<Form handleSubmit={handleSubmit} disable={disable} />
		</div>
	)
}
