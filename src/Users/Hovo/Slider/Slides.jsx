import React from 'react';
import Slider from "react-slick";
import Slide from './Slide';
import PropTypes from 'prop-types';



export default function Slides({slides}) {

const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    arrows: false
  }

    return (
      <div>
          <Slider {...settings}> 
            {slides.map((slide) => <Slide key={slide.id} slide={slide}/>)}
          </Slider>
      </div>
    );
};

Slides.propTypes = {
	slides: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			category: PropTypes.string.isRequired,
		})
	),
};