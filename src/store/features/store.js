import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './users/usersSlice'
import todosSlice from './todos/todosSlice'

// const checkTodo = (store) => (next) => (action) => {
//     if(action.type == 'todos/addTodos'){
//         const todos = store.getState().todos.data
//         if(todos.some((elem) => elem.id === action.payload.id)){
//             console.log('error');
//             return
//         }
//     }
//     next(action)
    
// }

const store = configureStore({
    reducer: {
        todos: todosSlice
    },
//    middleware: [checkTodo]
})

export default store