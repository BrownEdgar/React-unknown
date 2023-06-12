import PropTypes from 'prop-types';
import './Todos.scss';

export default function Todos({ todos }) {

	return (
		<div className="Todos">
      {todos.map(user => (
        <div className="Todos__Card" key={user.id}>
          <div className="Todos__Info">
            <p >ID:{user.id}</p>
            <p className="Todos__Title">{user.title}</p>
          </div>
        </div>
      ))}
    </div>
	)
}

Todos.propTypes = {
	data: PropTypes.arrayOf(
	  PropTypes.exact({
		userId: PropTypes.number,
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool
	  })
	 )
  };
