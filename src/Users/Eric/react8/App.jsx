import React, { useState } from 'react';

import data from './data'
import ProductCard from './ProductCard';
import './App.css'

export default function App() {
	const [value] = useState(data)
	return (
		<section>
			{
				value.map(product => {
					return (
						<ProductCard
							key={product.id}
							title={product.title}
							description={product.description}
							image={product.image} />
					)
				})
			}
		</section>
	)
}

