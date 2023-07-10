import {configureStore} from '@reduxjs/toolkit'
import usersReducer from './users/usersSlice'
import todosSlice from './todos/todosSlice'
import newUsersSlice from './newUsers/newUsersSlice'

const registrationDate = (store) => (next) => (action) => {
    if(action.type == 'newUsers/addNewUser'){
        const usersDate = {...action.payload, date: new Date()}
        action.payload = usersDate
    }
    next(action)
}

const checkUsersId = (store) => (next) => (action) => {
    if(action.type == 'newUsers/addNewUser'){
        const newUsers = store.getState().newUsers.data
        if(newUsers.some((elem) => elem.id === action.payload.id)){
            action.payload.id = Date.now()
        }
    }
    next(action)
}

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
        todos: todosSlice,
        newUsers: newUsersSlice
    },
    middleware: [registrationDate, checkUsersId]
})

export default store