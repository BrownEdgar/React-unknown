import { configureStore} from '@reduxjs/toolkit'
import todoSlice from '../app3/features/todoSlice/todoSlice'
import thunk from 'redux-thunk';


const checkUserTitle = (store) => (next) => (action) => {
    if(action.type === "todos/addTodo") {
        const todo = store.getState().todos
        console.log(todo)
			const isTitle = todo.data.some(user => user.title === action.payload.title || 
				user.id === action.payload.id) 
   
        if(isTitle) return alert("with this id or title is already in the list")
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