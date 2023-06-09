import { Link } from 'react-router-dom'
import ROUT from './route.js';
import './Navbar.scss'

export default function Navbar() {
    return( 
        <header>
        <nav>
            <ul>
                <li>
                    <Link to={ROUT.POSTS}>Posts</Link>
                </li>
                <li>
                    <Link to={ROUT.TODOS}>Todos</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}