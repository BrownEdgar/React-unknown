import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import ROUTES from '../../routes/routes'

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>
						<Link to={ROUTES.BLOG}>Blog</Link>
					</li>
					<li>
						<Link to={ROUTES.ABOUT}>About</Link>
					</li>
					<li>
						<Link to={ROUTES.CONTACT}>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
