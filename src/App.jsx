import { useSelector, useDispatch } from 'react-redux'

import './App.css'

export default function App() {
	const sel = useSelector(state => state.product)
	const dispatch = useDispatch()
	
	const handleChangeFunc = () => {
		dispatch({type: "CHANGE", payload: "SAMSUNG"}); 
	}

	return (
		<div>
			<h1>Redux</h1>
			<pre>
				{JSON.stringify(sel)}
			</pre>
			<button onClick={handleChangeFunc}>Change Name</button>
		</div>
	)
}
