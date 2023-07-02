import { createSlice } from "@reduxjs/toolkit";

const initialCommentsValue = []


const commentsSlice =  createSlice({
    name:'comments',
    initialState:initialCommentsValue,
    reducers:{
        addComment:(_,action) => action.payload
    }
})

export default commentsSlice.reducer;
export const { addComment } = commentsSlice.actions
