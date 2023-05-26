import { useState } from "react"

export default function Todos({ todo, toggleModal, setId }) {

	return (
		<tr>
			<td>{todo.id}</td>
			<td>{todo.title}</td>
			<td>
				<button onClick={() => {
					setId(todo.id)
					toggleModal()
				}}>remove</button>
			</td>
		</tr>
	)
}