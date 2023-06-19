import Slider from "react-slick";
import React, { useState} from "react";

export default function ImagesComponent({image}) {
    const [change, setChange] = useState(0)

    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      fade: true,
      slidesToShow: 1,
      autoplay: true,
      easing: "ease-in-out",
      arrows: false,
      autoplaySpeed: 5000,
      slidesToScroll: 1,
      beforeChange: (oldIndex, newIndex) => {
        setChange(newIndex)
      },
    };

   return (
    <div className="Images">
      <Slider {...settings}>
        {image.map((elem, index) => (
          <div key={elem.id} className={`Images__div ${index === change ? "active" : ""}`}>
            <img src={elem.image} alt="car-Image" />
            <div className="Images__info">
              <p>{elem.date}</p>
              <h1>{elem.model}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}