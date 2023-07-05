import { configureStore } from '@reduxjs/toolkit'
import cartsSlice from './features/carts/cartsSlice'


const store = configureStore({
    reducer: {
        carts: cartsSlice,
    }
})

 export default store