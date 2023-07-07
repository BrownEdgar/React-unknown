import { configureStore} from '@reduxjs/toolkit'
import todoSlice from '../app3/features/todoSlice/todoSlice'
import thunk from 'redux-thunk';


const checkUserTitle = (store) => (next) => (action) => {
    if(action.type === "todos/addTodo") {
        const todo = store.getState().todos
        console.log(todo)
        const isTitle = todo.data.some(user => user.title === action.payload.title) 
        const isId = todo.data.some(user => user.id === action.payload.id)
        if(isTitle || isId) return alert("with this id and title is already in the list")
    }
    next(action)
}

const store = configureStore({
    reducer: {
        todos: todoSlice
    },
    middleware: [checkUserTitle, thunk]
})

export default store