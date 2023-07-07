import  {  configureStore, getDefaultMiddleware, } from "@reduxjs/toolkit";
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



const store = configureStore({
	reducer: {
		users: usersReducer,
		todos: todosReducer,
		test: testSlice
	},

})

export default store;
