import { useState, useMemo } from 'react'
import Child from './Child'

export default function App() {
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(10_000);

	// const child = useMemo(() => <Child total={total} />, [total])

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => setTotal(total + 1)}>add COunt</button>
			<Child total={total} />
		</div>
	)
}
