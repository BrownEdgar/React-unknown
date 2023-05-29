import PropTypes from 'prop-types';


export default function Component({ post, deleteFilm, sortedRate }) {

	return (
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Poster</th>
					<th>Genre</th>
					<th>Stock</th>
					<th>Rate</th>
					<th>
						<i className="fa-solid fa-sort" onClick={sortedRate}></i>
					</th>
				</tr>
			</thead>
			<tbody>
				{post.map(elem => (
					<tr key={elem.id}>
						<td><span>{elem.title}</span></td>
						<td>
							<img src={elem.image} alt={elem.title} />
						</td>
						<td>{elem.genre}</td>
						<td>{elem.stock}</td>
						<td>{elem.rate}</td>
						<td>
							<button onClick={() => deleteFilm(elem.id)}>Delete</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}


Component.propTypes = {
	post: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			genre: PropTypes.string.isRequired,
			stock: PropTypes.number.isRequired,
			rate: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
		})
	),
	deleteFilm: PropTypes.func,
	sortedRate: PropTypes.func,
};