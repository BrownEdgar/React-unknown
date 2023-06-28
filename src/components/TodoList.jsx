import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoList() {
	const list = useSelector(state => state.todos)
	return (
		<div>TodoList</div>
	)
}
