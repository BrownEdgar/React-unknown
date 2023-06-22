import { useState } from 'react'

export default function CustomHook({ initialState , step }) {
	const [value, setValue] = useState(initialState);
	const dec = () => setValue(prevValue => prevValue - step)
	const inc = () => setValue(prevValue => prevValue + step)
	return [value, setValue, { dec, inc },]
}
