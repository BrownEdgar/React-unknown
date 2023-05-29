import React, { useState } from 'react'
import Component from './Component'
import "./App.scss"

export default function App() {
	
  const [users, setUsers] = useState([])
  const [lang, setLang] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const { languages, username, lastname, email } = e.target.elements;
    const user = {
      id: new Date().getTime(),
      email: email.value,
      languages: languages.value,
      username: username.value,
      lastname: lastname.value,
      registredDate: new Date()
    }

    const emailRepeat = users.some((user) => user.email === email.value);
    if (emailRepeat) {
      return alert("This email is already registered")
    }

    setLang([...lang, languages.value])
    setUsers([...users, user])
    e.target.reset();
  }
  
  const langLimit = (value) => {
    if(lang.filter((elem) => elem === value).length === 1){ 
      return true
    }
  }
  
  return (
    <div>
      <h1>Welcome to <span>SMARTCODE</span></h1>
      <Component handleSubmit={handleSubmit} langLimit={langLimit}/>
      <pre>
        {JSON.stringify(users, null, 3)}
      </pre>
    </div>
  )
}
