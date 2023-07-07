import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const initialCartsValue = {
    addCarts: [],
    status: "unknown",
    error: null
}

export const getCarts = createAsyncThunk('carts/getCarts', async() => {
    const cart = await axios.get("https://dummyjson.com/carts")
    return cart.data.carts
 })

const cartsSlice = createSlice({
    name: 'carts',
    initialState: initialCartsValue,
    reducers: {
			deleteFunc: (state, { payload: { cartId, productIndex} }) => {
				const cart = state.addCarts.find(cart => cart.id === cartId);
				cart.products.splice(productIndex, 1);
			}
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCarts.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getCarts.fulfilled, (_, action) => {
            return {addCarts: action.payload, status: "success", error: null}
        })
        .addCase(getCarts.rejected, (state, {error}) => {
            state.status = 'rejected'
            state.error = {message: error.message || 'please check url'}
        })
    }
})

export default cartsSlice.reducer
export const {deleteFunc}  =  cartsSlice.actions