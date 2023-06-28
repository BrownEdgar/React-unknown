/* eslint-disable react-refresh/only-export-components */
import {memo} from 'react'

function Child({ total }) {
	console.log("child render...")
	let sum = 0;
	for (let i = 0; i <= total; i++){
		sum += i;
	}

	return (
		<div>
			<h2>Total: {sum}</h2>
		</div>
	)
}


export default memo(Child)