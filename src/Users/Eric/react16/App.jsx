import { Routes, Route, Link } from 'react-router-dom'
import LoginForm from './LoginForm'
import Register from './Register'
import UserPage from './UserPage'
import Navbar from './Navbar'
import './App.css'

export default function App(){
    return(
        <>          
        <Navbar/> 
            <Routes>
                <Route path='/' element={<UserPage/>}/>
                <Route path='/Login' element={<LoginForm/>}></Route>
                <Route path='/Register' element={<Register/>}></Route>
            </Routes>
        </>
    )
}