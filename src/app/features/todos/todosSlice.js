import { createSlice } from "@reduxjs/toolkit"

const initialTodosValue = []



const todosSlice = createSlice({
	name: 'todos',
	initialState: initialTodosValue,
	reducers: {
		addTodos:(_, action) => action.payload
	}
})

export default todosSlice.reducer;
export const { addTodos } = todosSlice.actions