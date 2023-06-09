import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.scss'
import ROUTES from '../routes/routes'

export default function Navbar() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to={ROUTES.HOME}>Home</Link>
					</li>
					<li>
						<Link to={ROUTES.TODOS}>Todos</Link>
					</li>
					<li>
						<Link to={ROUTES.POSTS}>Posts</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
