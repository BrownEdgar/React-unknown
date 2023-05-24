import data from './data'
import ProductCard from './ProductCard';
import './App.css'

export default function App (){
    return (
        <section>
            {
                data.map(product => {
                    return(
                        <ProductCard title={product.title} description={product.description} image={product.image}/>
                    )
                })
            }
        </section>
    ) 
}

