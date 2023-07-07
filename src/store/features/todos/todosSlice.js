import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialTodosValue = {
    data: [],
    result: 'idle'
}

export const getAsyncTodos = createAsyncThunk('todos/getAsyncTodos', async (url) => {
    const response = await axios.getAsyncTodos(url)
    return response.data
}) 

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodosValue,
    reducers: {
        addTodos:(state, { payload }) => {
            console.log(state.data);
            state.data.push(payload)
            console.log(initialTodosValue.data);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncTodos.pending, (state, action) => {
            state.status = 'pending'
        })
        .addCase(getAsyncTodos.fulfilled, (state, action) => {
            state.status = 'success'
            state.data.push(action.payload)
        })
    }
})

export default todosSlice.reducer
export const { addTodos } = todosSlice.actions