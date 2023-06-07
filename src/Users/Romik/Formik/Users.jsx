import React from 'react'
import { GoTrashcan } from 'react-icons/go'

import './App.scss'
export default function Users({ users, handleDelete}) {
	return (
		<table>
			<thead>
				<tr>
					<th >N</th>
					<th>first name</th>
					<th>password</th>
					<th>delete</th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user,index) => {
						return (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.username}</td>
								<td>{user.password}</td>
								<td><span onClick={() => handleDelete(user.id)}><GoTrashcan /></span></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
