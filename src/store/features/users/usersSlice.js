import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const initialCartsValue = [
    {
        data: [],
        status: 'idle'
    }
]

// export default function usersReducer(state = initialValue, action){
//     switch(action.type){
//         case 'CHANGE_NAME': return [{
//             id: 1,
//             name: action.payload
//         }]
//         default: return state
//     }
// }

const getAsyncCarts = createAsyncThunk('users/getAsyncCarts', async (url) => {
    const response = await axios.get(url)
    console.log(response);
    return response
})

const usersSlice = createSlice({
    name: 'carts',
    initialState: initialCartsValue,
    reducers: {
        addUser:(state, action) => {
            state.push(action.payload)
        } 
    },
    extraReducers: (bulider) => {
        bulider.addCase(getAsyncCarts.pending, (state, action) => {
            state.status = 'pending'
        })
    }
})

export default usersSlice.reducer
export const { addUser } = usersSlice.actions