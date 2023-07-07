import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialTodosValue = {
    data: [],
    result: 'idle'
}

export const getAsyncTodos = createAsyncThunk('todos/getAsyncTodos', async (url, {rejectWithValue }) => {

	try {
		const response = await axios.get(url);
		return response.data
	} catch (error) {
		return rejectWithValue({
			errorMessage: error.message,
			time: new Date().toLocaleTimeString 
		})
	}
 
   
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
            state.data = action.payload
        })
        .addCase(getAsyncTodos.fulfilled, (state, action) => {
				
            state.status = 'success'
            state.data = action.payload
        })
					.addCase(getAsyncTodos.rejected, (state, action) => {
						console.log('Erroraction: ', action)
						state.status = 'rejected'
					})
    }
})

export default todosSlice.reducer
export const { addTodos } = todosSlice.actions