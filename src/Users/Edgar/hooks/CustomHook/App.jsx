

import useFetch from './useFetch'

export default function App() {
	const { data, isLoading, isError, errorMessage } = useFetch({
		target: 'posts',
	})
	const { data, { suffle, sorted, max, min }
} = useRandom({
	type: 'number',
	count: 10,
	range: {
		min: 100,
		max: 1540
	}
})

if (isLoading) {
	return <h1>Loading...</h1>
}


return (
	<div>
		{isError
			? (
				<>
					<h1>Check data 😐</h1>
					<pre>
						{errorMessage}
					</pre>
				</>
			)
			: <h1>data: {JSON.stringify(data)}</h1>}

	</div>
)
}
