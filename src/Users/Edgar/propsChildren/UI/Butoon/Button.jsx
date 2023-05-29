import React from 'react'
import PropTypes from 'prop-types'
import s from "./Button.module.css"

export default function Button({ title, variant, size, onClick }) {
	console.log(variant)
	return (
		<button 
			className={`${s.btn} ${s[variant]} ${s[size]}`}
			onClick={onClick || null}>
			{title}
		</button>
	)
}

Button.defaultProps = {
	variant: 'dark',
	size: 'md',
	title: 'button'
}

Button.propTypes = {
	variant: PropTypes.oneOf(["dark", 'light', 'warn']),
	children: PropTypes.element,
	onClick: PropTypes.func,
	size: PropTypes.oneOf(["sm", 'md', 'lg']),
	title: PropTypes.string
}