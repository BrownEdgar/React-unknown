import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAsyncCart,deleteProducts,deleteProduct} from './app/features/cart/cartSlice'
import MyLoader from './components/myLoader/MyLoader';
import ErrorPage from './components/errorPage/ErrorPage';
import './App.css'

export default function App() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getAsyncCart('https://dummyjson.com/carts'))
  }, []);

  const handleDelete = (id) => dispatch(deleteProducts({ id }))

	const handleDeleteProduct = (cartId, productId) => dispatch(deleteProduct({ cartId, productId }))

return (
<div>
  {cartItems.status === 'pending' 
    ? <MyLoader />
    : cartItems.status === 'rejected' 
    ?  <ErrorPage />
    : (<div>
      {cartItems.data.carts.map(cart => (
        <div key={cart.id} className="cart">
          <h2 className="cart-title">
            Cart: {cart.id} 
            <span onClick={() => handleDelete(cart.id)}>&times;</span>
          </h2>
          <ul className="product-list">
            {cart.products.map(product => (
              <li key={product.id} className="product-item">
                  <span onClick={() => handleDeleteProduct(cart.id, product.id)}>&times;</span>
                <p className="product-details">
                  ID: {product.id}<br/>
                  Title: {product.title}<br/>
                  Price: {product.price}<br/>
                  Quantity: {product.quantity}<br/>
                  Total: {product.total}
                </p>
              </li>
            ))}
          </ul>
        </div>
        ))}
    </div>
  )}
</div>
)}
  