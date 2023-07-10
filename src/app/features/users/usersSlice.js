import { createSlice, createAction } from "@reduxjs/toolkit"



export const my_action = createAction("another/my_action")


const initialUsersValue = [
	{
		id: 1,
		name: "Jhon"
	}
]

// 'users/addUser'
const usersSlice = createSlice({
	name: 'users',
	initialState: initialUsersValue,
	reducers: {
		addUser: (state, action) => {
			console.log('state:', state);
			console.log('action:', action);
			state.push(action.payload);
		},
		deleteUser: (state, { payload }) => {
			state.filter(user => user.id !== payload.id)
		}
	},
	extraReducers: (builder) => {
		builder.addCase(my_action, (state, {payload}) => {
	
			state[0].name = payload.username
		})
	}
})

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions
