import ROUTES from './route/route'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
    return( 
        <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={ROUTES.REGISTER}>Registration</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.LOGIN}>Login</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}