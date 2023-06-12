import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react';
import Register from './Register/Register'
import Login from './Login/Login'
import {Route , Routes} from 'react-router-dom'

export default function Layouts() {
    const [data, setData] = useState(null)

    const handleRegisterSubmit = (values) => {
      setData(values);
    }
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/register" element={<Register onSubmit={handleRegisterSubmit} data={data} />} />
            <Route path="/login" element={<Login data={data} />} />
        </Routes> 
        </>
    )
}