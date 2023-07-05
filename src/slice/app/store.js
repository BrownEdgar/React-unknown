import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/usersSlice'
import todosReducer from './features/todos/todosSlice'
import postsReducer from './features/posts/postsSlice'
import commentsReducer from './features/comments/commentsSlice'


const store = configureStore({

  reducer: {
    todos:todosReducer,
    users:usersReducer,
    posts:postsReducer,
    comments:commentsReducer,
  }
})

export default store