
import { Link } from 'react-router-dom'
import './App.css'

export default function LoginForm(){
    function login(e){
        [email, password] = e.target
    }
    return(
        <form className='login__form' >
            <h2>Login</h2>
            <div>
                <span>Enter your Email</span>
                <input type='text' name='email'/>
            </div>
            <div>
                <span>Enter your password</span>
                <input type='password' name='password'/>
            </div>
            <div>
                <button type='submit'>Log in</button>
            </div>
            <Link to='/Register'>not have an Account?</Link>
        </form>
    )
}