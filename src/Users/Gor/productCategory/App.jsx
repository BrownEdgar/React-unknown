import { useState } from 'react'
import classNames from 'classnames'
import { products } from './products'

import './App.css'

export default function App() {
	const [categories, setCategories] = useState(["Pizza", "Alcohol", 'Soups', 'Salads',])

	const [currenButtonID, setCurrenButtonID] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(products)

	const handleClick = (index) => {

		if (!currenButtonID.includes(index)) {
			setCurrenButtonID([...currenButtonID, index])
           
			const getCategory = ['Salads','Alcohol']
			const filtered = products.filter((product) => getCategory.includes(product.category))
            setFilteredProducts(1)
		}else{
			setCurrenButtonID(prevValues => {
				return prevValues.filter(elem => elem !== index)

			})
		}
		
	}

	return (
        <div className="big-div">

		<div className='App'>
			<button
				className={classNames('btn',{
					active: currenButtonID.length === 0,
				})}
				onClick={() => setCurrenButtonID([])}>all</button>
			{
				categories.map((elem, index) => {
					return (
						<button
							key={index}
							className={classNames('btn', {
								active: currenButtonID.includes(index),
							})}
							onClick={() => handleClick(index)}
						>{elem}</button>
					)
				})
			}
		</div>
        <div className="product">
        {filteredProducts.map((product)=>(
            <div key={product.id} className='item'>
                <img src={product.charAt("sa")} alt={product.title}></img>
                <p>{product.title}</p>
            </div>
        ))}
        </div>
        </div>

        
	)
}
