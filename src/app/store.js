import { configureStore } from '@reduxjs/toolkit'
import postsSlice from "./features/posts2/postsSlice";
import usersSlice from './features/posts/users/users.Slice'
import todosSlice from './features/posts/todos/todosSlice'

const store = configureStore({
    reducer: {
        posts: postsSlice,
        users: usersSlice,
        todos: todosSlice,
    }
})

 export default store