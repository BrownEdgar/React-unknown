import { createSlice } from "@reduxjs/toolkit"

const initialUsersValue = []

const usersSlice = createSlice({
    name: 'users',
    initialState: initialUsersValue,
    reducers: {
        addUsers: (_, action) => action.payload
    }
})

export default usersSlice.reducer
export const {addUsers}  =  usersSlice.actions