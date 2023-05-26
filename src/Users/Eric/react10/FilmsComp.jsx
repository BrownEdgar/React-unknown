import './App.css'

export default function FilmsComp({ film, deleteFilm }) {

	return (
		<tr>
			<td>{film.title}</td>
			<td>{film.genre}</td>
			<td>{film.stock}</td>
			<td>{film.rate}</td>
			<td>
				<button className='deleteButton' onClick={() => deleteFilm(film.id)}>Delete</button>
			</td>
		</tr>
	)
}