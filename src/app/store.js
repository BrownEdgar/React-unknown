import  { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import todosReducer from "./features/todos/todosSlice";
import testSlice from "./features/test/testSlice";


// const checkUserName = (store) => (next) => (action) => {
// 	console.log(store)
// 	if (action.type === 'todos/addUser') {
// 		const users = store.getState().test;
// 		const isExist = users.some(user => user.name === action.payload.name);
// 		if (isExist) {
// 			alert("user is exist")
// 			return;
// 		}
// 	}
// 	next(action)
// }

const addUserId = (store) => (next) => (action) => {
	if(action.type === 'todos/addUser') {
		action.payload.id = Date.now()
	}
	next(action)
}

const checkTodos = (store) => (next) => (action) =>{
	if (action.type === 'todos/addTodos'){
		const todos = store.getState().todos.data
		if (todos.length == 3){	
			return
		}
	}
	next(action)
	
}

const store = configureStore({
	reducer: {
		users: usersReducer,
		todos: todosReducer,
		test: testSlice
	},
	middleware: [addUserId,checkTodos]
})

export default store;

//   src
//  	- app
//			store.js => գլխավոր store
//			features
//				- users
// 						usersSlice.js
//
//
//
//
// 