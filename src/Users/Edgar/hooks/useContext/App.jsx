import React, { useState } from 'react'
import A from './A'
import { MyContext } from './Context/Context';


export default function App() {
	console.log("app render...");
	const [data, setData] = useState("secret data");
	const handleClick = () => {
		setData('ok')
	}
	return (
		<div>
			<h1>
				App component
			</h1>
			<MyContext.Provider value={{
				data,
				handleClick,
				x: 1
			}}>
				<A />
			</MyContext.Provider>

		</div>
	)
}
