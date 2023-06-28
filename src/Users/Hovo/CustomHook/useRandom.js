import { useState, useEffect } from 'react';


export default function useRandom({ type, count, options, }) {
	const [data, setData] = useState({
		value: [],
		result: null,
		error: null
	})

	useEffect(() => {
		function getRandomEntities(type) {
			const arr = [];
			if (type === 'n') {
				for (let i = 0; i < count; i++) {
					const random = Math.trunc(Math.random() * (options.end - options.start) + options.start);
					arr.push(random)
				}
				setData({ ...data, value: arr })
			}
		}


		if (type === 'number') {
			getRandomEntities('n')
		} else {
			getRandomEntities('s')
		}
	}, [type])


	const sorted = () => {
		let result = []
		if (type === 'number') {
			result = data.value.toSorted((a, b) => a - b)
		} else if (type === 'string') {
			result = data.value.toSorted((a, b) => a < b)
		}
		setData({ ...data, value: result })
	}

	const shuffle = () => {
		const suflledArray = data.value.toSorted(() => Math.random() - 0.5)
		setData({ ...data, value: suflledArray })
	}

	const max = () => {
		const max = Math.max(...data.value)
		setData({ ...data, result: max })
	}
	const min = () => {
		const min = Math.min(...data.value)
		setData({ ...data, result: min })
	}


	return type === 'number'
		? [data, { shuffle, sorted, max, min, }]
		: [data, { shuffle, sorted, }]
}
