import PropTypes from 'prop-types';
import './Todos.scss';

export default function Todos({ todos }) {

	return (
		<div className="Todo">
      {todos.map(user => (
        <div className="Todo__Card" key={user.id}>
          <div className="Todo__Info">
            <p >ID:{user.id}</p>
            <p className="Todo__Title">{user.title}</p>
          </div>
        </div>
      ))}
    </div>
	)
}

Todos.propTypes = {
	todos: PropTypes.arrayOf(
	  PropTypes.exact({
		userId: PropTypes.number,
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool
	  })
	 )
  };
