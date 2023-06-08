import React, { Fragment, useState } from 'react'
import { BiMale } from 'react-icons/bi';

import { FaFemale, FaSortAlphaUpAlt, FaSortAlphaDown } from 'react-icons/fa';
import B from './B';
import A from './A';


export default function Users({ users, handleDelete, handleClear, handleSorted, filteredGender }) {
	const [isEtitableId, setIsEtitableId] = useState(null)

	const setId = (userId) => { 
		setIsEtitableId(userId)
	}

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
					<th><button >edit</button></th>
					<th><button className='delButton' onClick={handleClear}>{"  "}</button></th>
				</tr>
			</thead>
			<tbody >
				{
					users.map((user,index) => {
						return (
							<Fragment key={user.id}>
									{
									(isEtitableId === user.id) 
									? <A index={index} user={user} setId={setId}/> 
									: <B index={index} user={user} setId={setId} handleDelete={handleDelete}/>
									}
							</Fragment>

							
						)
					})
				}
			</tbody>
		</table>
	)
}
