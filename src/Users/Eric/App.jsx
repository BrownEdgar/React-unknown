import React, {useState, useEffect} from 'react'
import Users from './Users'
import axios from 'axios'

export default function App() {

	const [users, setUsers] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => setUsers(res.data))
	}, [])
	
	return (
		<div>
			<Users users={users}/>
		</div>
	)
}
