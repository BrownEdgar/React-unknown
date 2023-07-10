import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit"
import axios from 'axios'
import { my_action } from "../users/usersSlice"
const initialTodosValue = {
	data: [],
	status: 'idle',
	filter: 'all',
	error: null,
	clipBoard: {}
}

export const getAsyncTodos = createAsyncThunk('todos/getAsyncTodos', async (url) => {
	const response = await axios.get(url)
	return response.data;

})



const todosSlice = createSlice({
	name: 'todos',
	initialState: initialTodosValue,
	reducers: {
		addTodos: (state, action) => {
			state.data.push(action.payload)
		},
		changeFilter: (state, action) => {
			state.filter = action.payload
		},
		toggleTodo: (state, { payload }) => {
			const todo = state.data.find(elem => elem.id === payload)
		
			if (todo) {
				todo.completed = !todo.completed;
				state.clipBoard= {
					...state.clipBoard,
					[todo.id]: todo.title
				}
				todo.title = "Lorem ipsum dolor sit amet."
			}
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

// selectors
export const allTodosSelector = state => state.todos.data
export const getFilter = state => state.todos.filter
export const completedTodosSelector = state => {
	return state.todos.data.filter(todo => todo.completed)
}
export const unCompletedTodosSelector = state => state.todos.data.filter(todo => !todo.completed)

export const memoTodos = createSelector(
	[allTodosSelector, completedTodosSelector, unCompletedTodosSelector, getFilter],
	(x, y, z, filterName) => {
		switch (filterName) {
			case 'all': return x
			case 'allCompleted': return y
			case 'allUnCompleted': return z
			default: return x
		}
	},
)



export default todosSlice.reducer;
export const { addTodos, changeFilter, toggleTodo } = todosSlice.actions