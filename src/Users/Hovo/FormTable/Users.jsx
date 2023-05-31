import React from 'react'
import { BiMale } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import { FaFemale, FaSortAlphaUpAlt, FaSortAlphaDown } from 'react-icons/fa';


export default function Users({ users, handleDelete, handleClear, handleSorted, filteredGender }) {
	return (
		<table>
			<thead>
				<tr>
					<th>N</th>
					<th>first name  
            <span className='sort' onClick={() => handleSorted(true,'first_name')}>
                <FaSortAlphaDown/>
            </span> 
            <span className='sort' onClick={() => handleSorted(false,'first_name')}>
                <FaSortAlphaUpAlt/>
            </span>
					</th>
					<th>last name
            <span className='sort' onClick={() => handleSorted(true,'last_name')}>
                <FaSortAlphaDown/>
            </span> 
            <span className='sort' onClick={() => handleSorted(false,'last_name')}>
                <FaSortAlphaUpAlt/>
            </span>
            </th>
            <th>email
            <span className='sort' onClick={() => handleSorted(true,'email')}>
                <FaSortAlphaDown/>
            </span> 
            <span className='sort' onClick={() => handleSorted(false,'email')}>
                <FaSortAlphaUpAlt/>
            </span>
          </th>
					<th>gender
            <span className='sort' onClick={() => filteredGender('Male')}>
                <BiMale/>
            </span>
            <span className='sort' onClick={() => filteredGender('Female')}>
                <FaFemale/>
            </span>
          </th>
					<th>ip address
            <span className='sort' onClick={() => handleSorted(true,'ip_address')}>
                <FaSortAlphaDown/>
            </span> 
            <span className='sort' onClick={() => handleSorted(false,'ip_address')}>
                <FaSortAlphaUpAlt/>
            </span>
          </th>
					<th><button className='delButton' onClick={handleClear}>Clear All</button></th>
				</tr>
			</thead>
			<tbody >
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
