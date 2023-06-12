import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { useState } from 'react';
import Register from './Register/Register'
import Login from './Login/Login'
import {Route , Routes} from 'react-router-dom'

export default function Layouts() {

    return(
        <>
        <Navbar/>
				<Outlet />
        </>
    )
}