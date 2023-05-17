
import PropTypes from 'prop-types'

export default function Component(props) {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	)
}

Component.defaultProps = {
	title: "unknown"
}

Component.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.oneOf(["male", "female"])
}


