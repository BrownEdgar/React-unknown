import { useSelector, useDispatch } from 'react-redux'
import './App.css'

function App() {
	const users = useSelector(state => state)
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch({ type: 'CHANGE_NAME', payload: "Samvel" })
	}
	return (
		<>
			<div>
				<h1>Hello redux</h1>
				<pre>
					{JSON.stringify(users)}
				</pre>
				<button onClick={handleClick}>change name</button>
			</div>
		</>
	)
}

export default App
