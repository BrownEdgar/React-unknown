import { useEffect, useState } from "react"

export default function useRandom({ type, count, range }) {
	const [data, setData] = useState([])
	const [dataNew, setDataNew] = useState(data)
	useEffect(() => {

			const arr = []
			for (let i = 0; i <  count; i++) {
				const random = Math.floor(Math.random() * (range.max - range.min) + range.min);
				arr.push(random)
			}
			setData(arr)

	}, [type])




	const shuffle = () => {
		const shuffle = data.toSorted(() => Math.random() - 0.5)
		setData(shuffle)
	}

	const sorted = () => {
		const sorted = data.toSorted((a, b) => a - b)
		setData(sorted)
	}

	const max = () => {
		const maxValue = Math.max(...data)
		setDataNew(maxValue)
	}

	const min = () => {
		const minValue2 = Math.min(...data)
		setDataNew([minValue2])
	};

	return [data, dataNew, { shuffle, sorted, max, min }]


}
