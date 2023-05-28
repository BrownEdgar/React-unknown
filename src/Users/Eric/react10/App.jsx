import data from './data'
import './App.css'
import { useContext, useState } from 'react'
import FilmsComp from './FilmsComp'


export default function App() {
	const [films, setFilms] = useState(data)
	console.log(films)
	function deleteFilm(id) {
		const newList = films.filter(film => film.id !== id)
		setFilms(newList)
	}

	function sort(e) {
		const { value } = e.target;
		setFilms([...films.sort((a, b) => a[value] - b[value])])
	}
	
	return (
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Genre</th>
					<th>Stock</th>
					<th>Rate</th>
					<th>sort by
						<select onChange={(e) => sort(e)}>
							<option value='rate'>rate</option>
							<option value='stock'>stock</option>
							<option value='id'>reset</option>
						</select>
					</th>
				</tr>
			</thead>
			<tbody>
				{films.map(film => {
					return <FilmsComp key={film.id} film={film} deleteFilm={deleteFilm} />
				})}
			</tbody>
		</table>
	)
}