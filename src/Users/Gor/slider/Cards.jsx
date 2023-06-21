import Card from "./Card";
import PropTypes from "prop-types"


import Slider from "react-slick";

export default function Cards({list}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000
      };
    return(
        <div className="Cards">
				<Slider {...settings}>
					{
						list.map((card) => <Card key={card.id} card={card} />


						)}
				</Slider>
          
        </div>
    )
}
Cards.propTypes = {
    list: PropTypes.arrayOf(PropTypes.exact(
        {
            id: PropTypes.number.isRequired,
            data: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }
    ))
}