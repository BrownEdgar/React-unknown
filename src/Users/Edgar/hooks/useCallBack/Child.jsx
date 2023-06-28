/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo } from 'react'


function Child() {

	const [data, setData] = useState([
		{ id: 1, name: "Levon", salary: 450_000 },
		{ id: 2, name: "Anahit", salary: 250_000 },
		{ id: 3, name: "Hasmik", salary: 150_000 },
		{ id: 4, name: "Smbat", salary: 300_000 },
	])

	const deleteById = (id) => {
		setData(prevState => {
			return prevState.filter(user => user.id !== id)
		})
	}

	const [salary, setSalary] = useState(0);
	const [interval, setInterval] = useState(null)
	const saveSalaryRange = (e) => {
		if (interval) {
			clearTimeout(interval)
		}
		const sto = setTimeout(() => {
			setSalary(e.target.value)
		}, 200)
		setInterval(sto)

	}

	const filtered = useMemo(() => {
		console.log("ok")
		return data.filter(user => user.salary >= salary)
	}, [salary])

	return (
		<div>
			<h1>salary: {salary}</h1>
			<button onClick={() => deleteById(2)}>delete user N2</button>
			<input type="range" name="salary" id="salary" min={50000} max={1e6} onChange={saveSalaryRange} step={50_000} />
			<ul>
				{
					filtered.map(elem => {
						return <li key={elem.id}>
							<p >{elem.name}</p>
							<p>{elem.salary}</p>
						</li>
					})
				}
			</ul>
		</div>
	)
}
export default Child