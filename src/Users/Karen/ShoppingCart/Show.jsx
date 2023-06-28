import {AiOutlineShoppingCart} from 'react-icons/ai'
import {TiDeleteOutline} from 'react-icons/ti'


export default function Show({product, deleteFunc, totalFunc}) {
    const total = totalFunc()

    return(
        <div className="glav_div">
            <h1>SHOPPING CART WIDGET</h1>
            <div className="shopping_div">
                <div className="red_div">
                    <button><span className='icon'><AiOutlineShoppingCart/></span><span>Add to Cart</span></button>
                </div>
                <h4>My Shopping Bag({product.length})</h4>
                <ul>
                    {
                        product.map(elem => {
                            return <li key={elem.id}>
                                <img src={elem.image} alt={elem.name} />
                               <div className='info_div'>
                                    <p className='flower_name'>{elem.name}</p>
                                    <p className='flower_price'>${elem.price.toFixed(2)}</p>
                               </div>
                                <span className='del_icon' onClick={() => deleteFunc(elem.id)}><TiDeleteOutline/></span>
                            </li>
                        })
                    }
                </ul>
                <div className='last_div'>
                    <h3>Total:<span className='total_span'>{total}</span></h3> 
                    <button className='check_but'>Check Out</button>
                </div> 
            </div>
        </div>
    )
}