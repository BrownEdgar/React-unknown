import PropTypes from 'prop-types';
import './Posts.scss'


export default function Posts({data}) {
	
	return (
		<div className="Todo">
			{data.map(post => (
				<div className="Todo__Card" key={post.id}>
          <div className="Todo__Info">
            <p >ID: {post.id}</p>
            <p className="Todo__Title">{post.title}</p>
            <p className="Todo__Title">{post.body}</p>
          </div>
			  </div>
			))}
		</div>
	)
}

Posts.propTypes = {
	data: PropTypes.arrayOf(
	  PropTypes.exact({
		userId: PropTypes.number,
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	  })
	 )
  };