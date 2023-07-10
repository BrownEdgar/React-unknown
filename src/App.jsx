import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';

import classNames from 'classnames'
import {   changeFilter,  getAsyncTodos, memoTodos, toggleTodo,  } from './app/features/todos/todosSlice'


import './App.css'

function App() {
	const [count, setCount] = useState(0)

	const todos = useSelector(memoTodos)
	const dispatch = useDispatch()



	useEffect(() => {
		dispatch(getAsyncTodos('https://jsonplaceholder.typicode.com/todos'))
	}, [])


	return (
		<>
			<div>
				<h1>Hello users {count}</h1>
				<button onClick={() => setCount(count + 1)}>add count</button>
				<div className="buttons">
					<button onClick={()=> dispatch(changeFilter('all'))}>all</button>
					<button onClick={()=> dispatch(changeFilter('allCompleted'))}>completed</button>
					<button onClick={()=> dispatch(changeFilter('allUnCompleted'))}>Un-completed</button>
				</div>
					<div className="flex">
					{
						todos.map(elem => {
							return (
								<p key={elem.id} onClick={() => dispatch(toggleTodo(elem.id))}>
									<span className={
										classNames('icon', {
											red: !elem.completed, 
											green: elem.completed 
										})
									}></span>
									{elem.title} 
								</p>
							)
						})
					}
					</div>
			</div>
		</>
	)
}

export default App
