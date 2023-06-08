/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { GoTrashcan } from 'react-icons/go';
import { BsFillPencilFill } from 'react-icons/bs';

export default function B({ index, user, setId, handleDelete }) {
	return (
		<tr>
			<td>{index + 1}</td>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
			<td>{user.email}</td>
			<td>{user.gender}</td>
			<td>{user.ip_address}</td>
			<td><span onClick={() => setId(user.id)}><BsFillPencilFill /></span></td>
			<td><span onClick={() => handleDelete(user.id)}><GoTrashcan /></span></td>
		</tr>
	)
}
