import { createSlice } from "@reduxjs/toolkit";

const initialPostsValue = []

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialPostsValue,
  reducers:{
    addPost:(_,action) => action.payload
  }
})

export default postsSlice.reducer;
export const { addPost } = postsSlice.actions