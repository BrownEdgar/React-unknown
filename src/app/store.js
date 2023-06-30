import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/product.js'
const store = configureStore({
    reducer: {
        product: productReducer
    }
})

 export default store