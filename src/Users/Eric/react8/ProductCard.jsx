import PropTypes from "prop-types";

export default function ProductCard({title, description, image}){
    return(
        <div className="productCard">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

ProductCard.PropTypes = {
    products: PropTypes.arrayOf(
        PropTypes.exact(
            {
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired
            }
        )
    )
}