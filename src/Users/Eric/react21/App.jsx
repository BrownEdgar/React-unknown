import ProductCard from './ProductCard'
import products from './products'
import './App.css'
import { useState } from 'react'

export default function(){
    const [data, setData] = useState(products)
    const showProducts = (name) => {
        data.map(product => {
            if(name == product.category){
                console.log(true);
                return <div>
                        <h1>{product.category}</h1>
                    </div>
            }else{console.log(false);}
        })
    }
    return(
        <div>
            <button onClick={showProducts('Alcohol')}>Alcohol</button>
            <button onClick={showProducts}>Salads</button>
        </div>
    )
}