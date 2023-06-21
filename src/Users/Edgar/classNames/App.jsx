import { useState } from 'react'
import classNames from 'classnames'

import './App.css'

export default function App() {
	const [categories, setcategories] = useState(["Pizza", "alcohol"])

	const [currenButtonID, setCurrenButtonID] = useState([])

	const handleClick = (indx) => {

		if (!currenButtonID.includes(indx)) {
			setCurrenButtonID([...currenButtonID, indx])
		}else{
			setCurrenButtonID(prevValues => {
				return prevValues.filter(elem => elem !== indx)
			})
		}
		
	}

	return (
		<div className='App'>
			<button
				className={classNames('btn',{
					active: currenButtonID.length === 0,
				})}
				onClick={() => setCurrenButtonID([])}>all</button>
			{
				categories.map((elem, index) => {
					return (
						<button
							key={index}
							// className={`${currenButtonID === index ? "active" : ''}`}
							className={classNames('btn', {
								active: currenButtonID.includes(index),
							})}
							onClick={() => handleClick(index)}
						>{elem}</button>
					)
				})
			}
		</div>
	)
}
