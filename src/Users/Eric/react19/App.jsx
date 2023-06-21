import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "./data";
import './App.css'

export default function App() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	}
	const [merc, setMerc] = useState([])
	useEffect(function () {
		setMerc(data)
	}, [])
	return (
		<div>
			<Slider {...settings} className="slide">
				{merc.map((e,index) => {
					return <div key={index}>
						<img src={e.img} className="slideImg" />
						<div>
							<h2>{e.model}</h2>
							<p>{e.desc}</p>
						</div>
					</div>
				})}
			</Slider>
		</div>
	)
}