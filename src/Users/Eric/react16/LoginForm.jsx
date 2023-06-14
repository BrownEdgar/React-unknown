
import { Link } from 'react-router-dom'
import './App.css'

export default function LoginForm(){
    const login = (e) => {
        e.preventDefault()
        const {email, password} = e.target.elements
        console.log(email.value, password.value);
    }
    return(
        <form className='login__form' onSubmit={login}>
            <h2>Login</h2>
            <div>
                <span>Enter your Email</span>
                <input type='text' id='email'/>
            </div>
            <div>
                <span>Enter your password</span>
                <input type='password' id='password'/>
            </div>
            <div>
                <button type='submit' onClick={login}>Log in</button>
            </div>
            <Link to='/Register'>not have an Account?</Link>
        </form>
    )
}