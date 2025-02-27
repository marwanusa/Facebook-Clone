import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./actGetPosts/actGetPosts";
import { actToggleLike } from "./actToggleLike/actToggleLike";

const initialState = {
    records: [],
    status: "idle",
    error: null,
    page: 1,       
    hasMore: true, 
}; 

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetPosts.pending, (state) => {
            state.status = "pending";
            state.error = null;
        });
        builder.addCase(actGetPosts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
        builder.addCase(actGetPosts.fulfilled, (state, action) => {
            state.status = "succeeded";
            if (action.payload.length === 0) {
                state.hasMore = false; 
            } else {
                state.records = [...state.records, ...action.payload];
                state.page += 1; 
            }
        });
        builder.addCase(actToggleLike.fulfilled, (state, action) => {
            const { postId, isLiked } = action.payload;
            const post = state.records.find((p) => p.id === postId);
            if (post) {
                post.likes_count += isLiked ? -1 : 1; 
            }
        });
    }
});

export { actGetPosts };
export default postsSlice.reducer;
