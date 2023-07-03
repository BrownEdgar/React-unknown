import { createSlice } from "@reduxjs/toolkit";

const initialCommentsValue = []


const commentsSlice =  createSlice({
  name:'comments',
  initialState:initialCommentsValue,
  reducers:{
    addComment:(_,action) => action.payload,
    closeComment:(state) => {return state = initialCommentsValue}
  }
})

export default commentsSlice.reducer;
export const { addComment,closeComment } = commentsSlice.actions
