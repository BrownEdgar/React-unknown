/* eslint-disable react/prop-types */


export default function Review({ review }) {
	const truncCate = (text, quantity) => {  
		return text.length > quantity 
		? text.slice(0, quantity).concat('...') 
		: text
	}

	return (
		<div className='Review'>
			<div className='Review__header'>
				<img src={review.image} alt={review.title} />
				<div className='Review__authorname'>
					<h1>
						{review.firstname}
						{' '}
						{review.lastName}
						</h1>
						<p>
						{review.username}
						</p>
				</div>
			</div>
			<div className='Review__description'>
				<h2>{review.title}</h2>
				<p>
					{truncCate(review.description, 130)}
				</p>
			</div>
		</div>
	)
}
