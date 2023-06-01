import React from 'react'
import { GoTrashcan } from 'react-icons/go'
import { TiArrowSortedDown } from 'react-icons/ti'
import { FaFemale } from 'react-icons/fa'
import { FaMale } from 'react-icons/fa'
import { MdAlarmOff } from "react-icons/md";

export default function Users({ users, handleDelete, toSortFunc,setGenderType }) {
	console.log(users)
	return (
		<table>
			<thead>
				<tr>
					<th>N</th>
					<th>
						first name
						<span onClick={() => toSortFunc('first_name')} className='icons'>< TiArrowSortedDown /></span></th>
					<th>
						last name
						<span
							onClick={() => toSortFunc('last_name')}
							className='icons'>< TiArrowSortedDown /></span>
					</th>
					<th>
						email
						<span
							onClick={() => toSortFunc('email')}
							className='icons'>< TiArrowSortedDown /></span></th>
					<th>
						gender
						<span
							className='female'
							onClick={() => setGenderType("Female")}
						>
							<FaFemale />
						</span>
						<span onClick={() => setGenderType("")}>
							<MdAlarmOff />
						</span>
						<span
							className='male'
							onClick={() => setGenderType("Male")}
						>
							<FaMale />
						</span>
					</th>
					<th>
						ip address
						<span
							onClick={() => toSortFunc('ip_address')}
							className='icons'>< TiArrowSortedDown /></span></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user, index) => {
						return (
							<tr key={index}>
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