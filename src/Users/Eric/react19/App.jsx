import React from "react";
import Slider from "react-slick";
import data from "./data";

export default function App(){
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
    }
    return (
        <div>
            <Slider>
                {data.map(merc => {
                    return <div>
                        <img src={merc.img} />
                    </div>
                })}
            </Slider>
        </div>
    )
}