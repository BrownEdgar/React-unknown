import { useSelector } from 'react-redux'
import './ErrorPage.css'

export default function ErrorPage() {
  const cartItems = useSelector((state) => state.cart)

  return (
    <div className="ErrorPage">
      <h1 className="message">{cartItems.error.message || 'An error occurred.'}</h1>
    </div>
  );
}
