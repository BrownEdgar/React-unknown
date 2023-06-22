import { useReducer } from 'react'
import reducer from '../hooks/UseReducer/reducer'
import { initialState } from './reducer'

import './App.scss'
import Reviews from './Reviews'

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState )


	return (
		<div>
			<Reviews list={state.reviews} />
		</div>
	)
}
