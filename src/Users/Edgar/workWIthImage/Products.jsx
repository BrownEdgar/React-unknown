import React from 'react';
import PropTypes from 'prop-types'

import "./Products.scss"

export default function Products({products}) {

	const tranCate = (text, smblCount) => { 
		return text?.length > smblCount ? text.slice(0, smblCount) + "..." : text;
	}

	return (
		<div className='Product'>
				{
				products.map(product => {
						return (
							<div className='Product__item' key={product.id}>
								<img src={product.image} alt={product.title} />
								<div className="Product__info">
									<h2>{product.title}</h2>
									<p>{tranCate(product.description, 100)}</p>
									<ul className='Product__list Product__list-dark'>
										<li>
											<span>price:{product.price}</span>
										</li>
										<li>
											<span>category: {product.category}</span>
										</li>
									</ul>
								</div>
							</div>
						)
				})
				}
		</div>
	)
}


Products.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.exact(
			{
				id: PropTypes.number.isRequired,
				title: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				category: PropTypes.string.isRequired,
				description: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
			}
		)
		)
}