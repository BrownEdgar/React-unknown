import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios'


export const getTodos = createAsyncThunk('carts/getTodos', async () => {
    const todo = await axios.get("https://jsonplaceholder.typicode.com/todos")
    return todo.data
})

const todoSlice = createSlice({
    name: 'todos',
    initialState : {
        data: [],
        result: 'idle'
    },
    reducers: {
        addTodo: (state, action) => {
            state.data.push(action.payload);
          }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTodos.pending, (state, action) => {
            state.status = 'pending';
          })
          .addCase(getTodos.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
          })
          .addCase(getTodos.rejected, (state, action) => {
            state.status = 'failed';
          });
      }
})

export default todoSlice.reducer
export const {addTodo}  =  todoSlice.actions