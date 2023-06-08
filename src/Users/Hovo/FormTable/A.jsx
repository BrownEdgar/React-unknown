import React from 'react'

export default function A({ index, user, setId, }) {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>
				<input type="text" placeholder={user.first_name} />
			</td>
			<td>
				<input type="text" placeholder={user.last_name} />
			</td>
			<td>
				<input type="text" placeholder={user.email} />
			</td>
			<td>
				<input type="text" placeholder={user.gender} />
			</td>
			<td>
				<input type="text" placeholder={user.ip_address} />
			</td>
			<td>
				<input type="submit" value='save' onClick={() => {
					setId('')
					
				}} />
			</td>

			<td></td>

		</tr>
	)
}
