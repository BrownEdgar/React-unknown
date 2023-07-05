import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialcartsValue = {
  data:[],
  status:'pending',
  error:null
}

export const getAsyncCart = createAsyncThunk('cart/getAsyncCart',async(url) =>{
  const response = await axios.get(url)
  return response.data
})

const cartsSlice =  createSlice({
  name:'cart',
  initialState:initialcartsValue,
  reducers:{
    deleteProducts: (state, { payload }) => {
      state.data.carts = state.data.carts.filter(cart => cart.id !== payload.id)
    },
    deleteProduct: (state, { payload }) => {
      state.data.carts.map(cart => {
        cart.products = cart.products.filter(product => product.id !== payload.id)
      })
    }
  },

  extraReducers:(builder) => {
      builder

    .addCase(getAsyncCart.pending,(state)=>{
      state.status = 'pending'
    })

    .addCase(getAsyncCart.fulfilled,(_,action)=>{
      return {
        error:null,
        status:'success',
        data:action.payload
      }
    })

    .addCase(getAsyncCart.rejected,(state,{error})=>{
      state.status = 'rejected'
      state.error = {message:error.message || 'check your internet connection'}
    })
  }
})


export default cartsSlice.reducer;
export const { deleteProducts, deleteProduct } = cartsSlice.actions