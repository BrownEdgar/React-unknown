import  { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/usersSlice";
import todosReducer from "./features/todos/todosSlice";



const store = configureStore({
	reducer: {
		users: usersReducer,
		todos: todosReducer
	}
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