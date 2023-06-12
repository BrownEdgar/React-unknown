import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Login from './login/Login';


export default function Layouts() {
const [isLOgin, setIsLOgin] = useState(false)
	return (
		<>
			{isLOgin  ? <Navbar /> : <Login />}
			<Outlet />
		</>
	);
};