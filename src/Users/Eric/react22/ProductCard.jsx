export default function ProductCard(product){
    return(
        <div>
            <div>
                <img />
                <span>{product.name}</span>
                <p>price: ${product.price}</p>
            </div>
            <div>
                <button>delete from cart</button>
            </div>
        </div>
    )
}