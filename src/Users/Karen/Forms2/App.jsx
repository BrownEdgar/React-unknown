import React, { useState } from 'react'
import data from './data.json'

import MyForm from './MyForm'
import Users from './Users'
import './App.scss'

export default function App() {
	const [users, setUsers] = useState(data)
    const [del, setDell] = useState(true)

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
		const filtered = users.filter(elem => elem.id !== id);
		setUsers(filtered)
	}

    const toSortFunc = (id) => {
        let sort ;
        switch(id) {
            case 1:
                 sort = users.toSorted((a, b) => (a.first_name > b.first_name) ? 1 : -1)
              break;
            case 2:
                 sort = users.toSorted((a, b) => (a.last_name > b.last_name) ? 1 : -1)
              break;
              case 3:
                 sort = users.toSorted((a, b) => (a.email > b.email) ? 1 : -1)
              break;
              case 4:
                 sort = users.toSorted((a, b) => (a.ip_address > b.ip_address) ? 1 : -1)
              break;
          }        
          setUsers(sort)
    }

    const clearAllFunc = () => {
        const event = !del;
        setUsers(event ? data : []);
        setDell(event)
    }

    const handleFemail = (par) => {
        const result2 = data.filter(element => element.gender === par);
        setUsers(result2)
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
				<Users users={users} handleDelete={handleDelete} toSortFunc={toSortFunc} handleFemail={handleFemail}/>
			</div>
		</div>
	)
}