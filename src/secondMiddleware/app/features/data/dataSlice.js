import {createSlice} from '@reduxjs/toolkit'

const initialDataValue = [
  {
    id: '92447',
    name: 'Wintheiser Group Group',
    contact: {
      address: '566 Leonardo Loop',
      phone: '025.415.9443 x5894',
      email: 'Esta36@gmail.com',
    }
  },
  
  {
    id: '42354',
    name: 'Larson Inc and Sons',
    contact: {
      address: '3089 Waelchi Keys',
      phone: '711.874.8437 x58199',
      email: 'Lloyd_Shanahan73@hotmail.com',
    }
  }
]

const dataSlice = createSlice({
  name: 'data',
  initialState: initialDataValue,
  reducers:{
    addData: (state, {payload}) => {
      state.push(payload);
    },
  }
})

export default dataSlice.reducer;
  export const { addData } = dataSlice.actions