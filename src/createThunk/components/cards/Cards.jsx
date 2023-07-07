export default function Cards({ product, cartId, handleDeleteProduct }) {


  return (
    <li key={product.id} className="product-item">
      <span onClick={() => handleDeleteProduct(cartId, product.id)}>&times;</span>
      <p className="product-details">
        ID: {product.id}<br/>
        Title: {product.title}<br/>
        {/* Price: {product.price}<br/> */}
        {/* Quantity: {product.quantity}<br/> */}
        {/* Total: {product.total} */}
      </p>
    </li>
  );
}
