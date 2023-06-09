import { useOutletContext } from 'react-router-dom'


export default function Contact() {
	const value = useOutletContext()
	return (
		<h1>Contact {JSON.stringify(value)}</h1>
	)
}

