import React, { useState } from 'react'
import MyForm from './MyForm'

import "./App.scss"

export default function App() {
    
	const [users, setUsers] = useState([])
	const [val, setVal] = useState([])
	
    const allFunc = (lang) => {
		const result = users.filter(user => user.languages === lang );
		return result.length >= 2;
	  }
			
	const handleSubmit = (e) => { 
		e.preventDefault()

		const { languages, username, lastname, email} = e.target.elements;
        
		const user = {
			id: new Date().getTime(),
			languages: languages.value,
			username: username.value,
			lastname: lastname.value,
            email: email.value,
			registredDate: new Date()
		}
		
		if (users.some(user => user.email === email.value)) {
			return alert('Email уже существует!');
		  } 
		
		
		setUsers([...users, user]);
		setVal([...val, user.languages])
		e.target.reset();
	}
	return (
		<div>
			<h1>Welcome to <span>SMARTCODE</span></h1>
			<MyForm handleSubmit={handleSubmit} allFunc={allFunc} />
				<pre>
					{JSON.stringify(users, null, 3)}
				</pre>
		</div>
	)
}
