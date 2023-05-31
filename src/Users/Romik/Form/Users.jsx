import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import { GoArrowSmallUp } from 'react-icons/go'
 
export default function Users({ users, handleDelete, sortData }) {
	return (
		<table>
			<thead>
				<tr>
					<th >N</th>
					<th>first name <span  onClick={() => sortData('first_name')}><GoArrowSmallUp /></span></th>
					<th>last name <span  onClick={() => sortData('last_name')}><GoArrowSmallUp /></span></th>
					<th>email <span  onClick={() => sortData('email')}><GoArrowSmallUp /></span></th>
					<th>gender</th>
					<th>ip address <span  onClick={() => sortData('ip_address')}><GoArrowSmallUp /></span></th>
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
