import { createSlice } from "@reduxjs/toolkit"
import actGetPosts from "./actGetPosts/actGetPosts"

const initialState = {
    records: [],
    status: "idle",
    error: null
} 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder.addCase(actGetPosts.pending,(state)=>{
            state.status = "pending";
            state.error = null;
        })
        builder.addCase(actGetPosts.rejected,(state,action)=>{
            state.status = "failed";
            state.error = action.payload;
        })
        builder.addCase(actGetPosts.fulfilled,(state,action)=>{
            state.status = "succeeded";
            state.records = action.payload;

        })
    }
    })

export {actGetPosts}
export default postsSlice.reducer