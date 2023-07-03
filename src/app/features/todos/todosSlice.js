import { createSlice } from "@reduxjs/toolkit"

const initialTodosValue = []

const todosSlice = createSlice({
  name:'todos',
  initialState:initialTodosValue,
  reducers:{
    addTodos:(_, action) => action.payload,
    deleteTodos: (state, { payload }) => {
      return state.filter(todo => todo.id !== payload.id);
    },
    closeTodos:(state) => { return state = initialTodosValue }
  }
})

export default todosSlice.reducer;
export const { addTodos, deleteTodos,closeTodos } = todosSlice.actions