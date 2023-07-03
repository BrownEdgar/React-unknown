import { createSlice } from "@reduxjs/toolkit"

const initialUsersValue = [
	{
		id:1,
		name: "Jhon"
	}
]

// 'users/addUser'
const usersSlice = createSlice({
	name: 'users',
	initialState: initialUsersValue,
	reducers: {
		addUser:(state,action) => {
			console.log('state:', state);
			console.log('action:', action);
			state.push(action.payload);
		},
		deleteUser: (state, { payload }) => {
			state.filter(user => user.id !== payload.id)
		}
	}
})

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions
