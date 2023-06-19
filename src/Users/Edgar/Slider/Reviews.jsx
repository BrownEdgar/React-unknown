import Review from './Review'
import PropTypes from 'prop-types'
import Slider from "react-slick";

export default function Reviews({ list }) {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode:true,
	}

	return (
		<div className='Reviews'>
			<Slider {...settings}>
				{
					list.map((review) => <Review key={review.id} review={review} />)
				}
			</Slider>
		</div>
	)
}

Reviews.propTypes = {
	list: PropTypes.arrayOf(PropTypes.exact(
		{
			id: PropTypes.number.isRequired,
			firstname: PropTypes.string.isRequired,
			lastName: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			username: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		}
	))
}
