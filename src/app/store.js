import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './features/users/usersSlice'
import todosReducer from './features/users/todos/todosSlice'


const store = configureStore({

  reducer: {
    users: usersReducer,
    todos:todosReducer,
  }
})

export default store