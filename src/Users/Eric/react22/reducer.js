import { DELETE_PROD } from "./actionTypes";

export  const initialState = {
    products: [
        {
            id: 1,
            name: 'Lorem ipsum dolor sit amet',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQv8Io6Xo-nyk6lSoSpi6IZkr6_cqTPgIGcQ&usqp=CAU', 
            price: 30
        },
        {
            id: 2,
            name: 'Lorem ipsum dolor sit amet',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqb7-I89iqXjsOOx6j_mtA_7cxXaNxCFeRg&usqp=CAU', 
            price: 15
        },
        {
            id: 3,
            name: 'Lorem ipsum dolor sit amet',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiF8vu_u-JWctaJ9hOMq5Wci2iI2UQzCm-Jw&usqp=CAU', 
            price: 20
        }
    ]
}
export default function reducer(state = initialState, action){
    switch(action.type){
        case DELETE_PROD:
            return deleteProduct()
    }
}

function deleteProduct(id){
    const filteredProducts = state.products.filter(e => e.id !== id)
    return{...state, products: filteredProducts}
}