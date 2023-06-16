import { useReducer, useEffect } from 'react'
import reducer, { initialState } from './reducer';
import {  ADD_TODO, FIND_FIVE, SORTED_DATA, } from './actionTypes';
import axios from 'axios';

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleClick = () => { 
		dispatch({type: SORTED_DATA})
	}

	const findFive = () => { 
		dispatch({type: FIND_FIVE})
	}


	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos')
		.then(res => dispatch({type: ADD_TODO, payload: res.data}))
	}, [])
	

	return (
		<div>
			<h1>State: {JSON.stringify(state)}</h1>
			<button onClick={handleClick}>sorted data</button>
			<button onClick={findFive}>find five</button>
		</div>
	)
}
