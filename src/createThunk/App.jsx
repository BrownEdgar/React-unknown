import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAsyncCart, deleteProducts, deleteProduct } from './app/features/cart/cartSlice';
import MyLoader from './components/myLoader/MyLoader';
import ErrorPage from './components/errorPage/ErrorPage';
import Cards from './components/cards/Cards';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getAsyncCart('https://dummyjson.com/carts'));
  }, []);

  const handleDelete = (id) => dispatch(deleteProducts({ id }));

  const handleDeleteProduct = (cartId, productId,) => dispatch(deleteProduct({ cartId, productId }));

  

  return (
    <div>
      {cartItems.status === 'pending' ? (
        <MyLoader />
      ) : cartItems.status === 'rejected' ? (
        <ErrorPage />
      ) : (
        <div>
          {cartItems.data.carts.map((cart) => (
            <div key={cart.id} className="cart">
              <h2 className="cart-title">
                Cart: {cart.id} 
                <span onClick={() => handleDelete(cart.id)}>&times;</span>
              </h2>
              <ul className="product-list">
                {cart.products.map((product) => (
                  <Cards 
                    key={product.id} 
                    product={product} 
                    cartId={cart.id} 
                    handleDeleteProduct={handleDeleteProduct} 
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
