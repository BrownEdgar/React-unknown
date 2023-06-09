import  PropTypes  from 'prop-types'

export default function Home({name}) {
	return (
		<div>
			<h1>Home page  name: {name}</h1>
		</div>
	)
}

Home.defaultProps = {
	name: "next.js"
}

Home.propTypes = {
	name: PropTypes.string
}