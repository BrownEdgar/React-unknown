import React from 'react'
import { GoTrashcan } from 'react-icons/go'

export default function Users({ users, handleDelete }) {
	return (
		<table>
			<thead>
				<tr>
					<th>N</th>
					<th>first name</th>
					<th>last name</th>
					<th>email</th>
					<th>gender</th>
					<th>ip address</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user,index) => {
						return (
							<tr key={user.id}>
								<td>{index + 1}</td>
								<td>{user.first_name}</td>
								<td>{user.last_name}</td>
								<td>{user.email}</td>
								<td>{user.gender}</td>
								<td>{user.ip_address}</td>
								<td><span onClick={() => handleDelete(user.id)}><GoTrashcan /></span></td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	)
}
