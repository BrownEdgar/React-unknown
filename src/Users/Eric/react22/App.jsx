import { useReducer } from "react";
import { DELETE_PROD } from "./actionTypes";
import reducer, {initialState} from './reducer'
import ProductCard from "./ProductCard";
import './App.css'

export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState)
    function deleteProd(){
        dispatch({type:DELETE_PROD})
    }
    return(
        <div>
            {initialState.products.map(product => {
                return <ProductCard 
                    key={product.id} 
                    product={product}
                    />
            })}
            
        </div>
    )
}