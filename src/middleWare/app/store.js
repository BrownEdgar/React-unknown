import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './features/todos/todosSlice';

const checkValues = (store) => (next) => (action) => {
  if (action.type === 'todos/addTodos') {
    const todos = store.getState().todo.data;
    const isExist = todos.some((todo) => todo.id == action.payload.id || todo.title === action.payload.title )
    if (isExist) return;
  } 
  next(action)
};



const store = configureStore({
  reducer: {
    todo: todosReducer,
  },
  middleware:getDefaultMiddleware => [...getDefaultMiddleware(),checkValues]
});

export default store;
