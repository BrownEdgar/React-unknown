import PropTypes from 'prop-types';
import './Posts.scss'


export default function Posts({ posts }) {
	
	return (
		<div className="Posts">
			{posts.map(post => (
				<div className="Posts__Card" key={post.id}>
          <div className="Posts__Info">
            <p >ID: {post.id}</p>
            <p className="Posts__Title">{post.title}</p>
            <p className="Posts__Title">{post.body}</p>
          </div>
			  </div>
			))}
		</div>
	)
}

Posts.propTypes = {
	posts: PropTypes.arrayOf(
	  PropTypes.exact({
		userId: PropTypes.number,
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired
	  })
	 )
  };