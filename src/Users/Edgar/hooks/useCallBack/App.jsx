import { useMemo, useCallback, useState } from 'react'
import Child from './Child';
import './App.css'

export default function App() {

	const [count, setCount] = useState(0)


	// const deleteById = (id) => {  
	// 	setData(prevState => {
	// 		return prevState.filter(user => user.id !== id)
	// 	})
	// }


	// const deleteById = useCallback(
	// 	(id) => {
	// 	setData(prevState => {
	// 		return prevState.filter(user => user.id !== id)
	// 	})
	// }, [],)
	

	return (
		<div>
			<h1>Count:{count}</h1>
			<button onClick={() => setCount(count + 1)}>add count</button>
	
			<Child />
		
		</div>
	)
}
