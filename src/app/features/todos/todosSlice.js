import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { my_action } from "../users/usersSlice"
const initialTodosValue = {
	data: [],
	status: 'idle',
	error: null
}

export const getAsyncTodos = createAsyncThunk('todos/getAsyncTodos', async (url) => {
	const response = await axios.get(url)
	return response.data;
	
})



const todosSlice = createSlice({
	name: 'todos',
	initialState: initialTodosValue,
	reducers: {
		addTodos: (state,action) => {
			state.data.push(action.payload)
		}

	},
	// extraReducers:(builder) => {
	// 	builder
	// 		.addCase(getAsyncTodos.pending, (state, action) => {
	// 		console.log(action)
	// 		state.status = 'pending'
	// 	})
	// 	.addCase(getAsyncTodos.fulfilled, (state, action) => {
	// 		console.log(action)
	// 		return {
	// 			error: null,
	// 			status: 'success',
	// 			data: action.payload
	// 		}
	// 	})
	// 	.addCase(getAsyncTodos.rejected, (state,{error}) => {

	// 		state.status = 'rejected'
	// 		state.error = {message: error.message || 'please check url'}
	// 	})
	// }
	extraReducers: {
		[getAsyncTodos.pending]: (state) => {

			state.status = 'pending'
		},
		[getAsyncTodos.fulfilled]: (state, action) => {
	
			return {
				data: action.payload,
				status: 'success',
				error: null
			}
		},
		[getAsyncTodos.rejected]: (state) => {
			state.status = 'failure'
		},
		[my_action]: (state, { payload }) => {
	
			state.error = payload.todoError
		},

	}
})

export default todosSlice.reducer;
export const { addTodos } = todosSlice.actions