import { createSlice } from "@reduxjs/toolkit"


const testSlice = createSlice({
	name: 'todos',
	initialState: [{
		id: 1,
		name: "Hakob"
	}],
	reducers: {
		addUser: (state, {payload}) => {
			state.push(payload)
		}
	}
})
export default testSlice.reducer;
export const { addUser } = testSlice.actions