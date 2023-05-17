
import PropTypes from 'prop-types'

export default function TodoList({ data, name }) {
	return (
		<>
			<h1>{name.charAt(0)}</h1>
			<ul className='List'>
				{
					data.map(elem => {
						return <li key={elem.id}>{elem.title}</li>
					})
				}
			</ul>
		</>
	)
}


TodoList.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.exact(
			{
				userId: PropTypes.number.isRequired,
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				completed: PropTypes.bool.isRequired,
			}
		)),
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	date: PropTypes.date
}