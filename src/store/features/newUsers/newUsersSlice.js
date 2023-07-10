import { createSlice } from "@reduxjs/toolkit"



const initialNewUsersValue = {
    data: [
        {
          id: '92447',
          name: 'Wintheiser Group Group',
          contact: {
            address: '566 Leonardo Loop',
            phone: '025.415.9443 x5894',
            email: 'Esta36@gmail.com',
          },
        },
        {
          id: '42354',
          name: 'Larson Inc and Sons',
          contact: {
            address: '3089 Waelchi Keys',
            phone: '711.874.8437 x58199',
            email: 'Lloyd_Shanahan73@hotmail.com',
          },
        },
      ],
    result: 'idle'
}

const newUsersSlice = createSlice({
    name: 'newUsers',
    initialState: initialNewUsersValue,
    reducers: {
        addNewUser: (state, {payload}) => {
            console.log(state.data);
            console.log(payload);
            state.data.push(payload)
        }
    },
})

export default newUsersSlice.reducer
export const {addNewUser} = newUsersSlice.actions