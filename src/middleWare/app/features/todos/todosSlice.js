import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const initialtodosValue = {
  data:[],
  status:'pending',
  error:null
}

export const getAsyncCart = createAsyncThunk('todos/getAsyncCart', async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  
  const todosSlice = createSlice({
    name: 'todos',
    initialState: initialtodosValue,
    reducers: {
      addTodos: (state, { payload }) => {
        state.data.push(payload);
      },
    },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncCart.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getAsyncCart.fulfilled,(_,action)=>{
        return {
            error:null,
            status:'success',
            data:action.payload
        }
      })
      .addCase(getAsyncCart.rejected, (state, { error }) => {
        state.status = 'rejected';
        state.error = { message: error.message || 'check your internet connection' };
      });
  },
});
  
  export default todosSlice.reducer;
  export const { addTodos } = todosSlice.actions;
  