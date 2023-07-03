import { createSlice } from '@reduxjs/toolkit'

const initialUsersValue = []

  const usersSlice = createSlice({
    name:'users',
    initialState: initialUsersValue,
    reducers:{
        addUser:(_, action) => action.payload,
        deleteUser:(state, { payload }) => {
          return state.filter(user => user.id !== payload.id)
        },
        closeUsers:(state) => {return state = initialUsersValue }
    }
  })

  export default usersSlice.reducer;
  export const { addUser,deleteUser,closeUsers } = usersSlice.actions
   