import { createSlice } from "@reduxjs/toolkit"

const initialPostsValue = []

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPostsValue,
    reducers: {
        addPosts: (_, action) => action.payload
    }
})

export default postsSlice.reducer
export const {addPosts}  =  postsSlice.actions