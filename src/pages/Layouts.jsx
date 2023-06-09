import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layouts() {
	const [secret, setSecret] = useState("secret word")
	return (
		<>
			<Navbar />
			<Outlet context={secret}/> 
			
			<footer>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae soluta libero, hic eveniet sed eaque dolore dicta dolorem odio iste. Molestiae quaerat maxime non obcaecati optio illo exercitationem suscipit sit eaque deleniti amet quibusdam esse, et assumenda a est?</p>
			</footer>
		</>
	)
}
