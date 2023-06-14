import { Link } from 'react-router-dom'
import userImage from './UserImage.png'
import './App.jsx'

export default function Navbar(){
    return(
        <nav>
            <div className='nav__leftSide'>
                <h1>CryptoLab</h1>
                <ul>
                    <li>
                        <Link to='/Login'>log</Link>
                    </li>
                    <li>
                        <Link to='/Register'>reg</Link>
                    </li>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                </ul>
            </div>
            <div className='nav__rightSide'>
                <button>Log in</button>
                <button>Register</button>
                <img src={userImage} alt='userImage'/>
            </div>
        </nav>
    )
}