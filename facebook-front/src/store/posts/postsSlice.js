import { createSlice } from "@reduxjs/toolkit";
import actGetPosts from "./actGetPosts/actGetPosts";

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
    }
});

export { actGetPosts };
export default postsSlice.reducer;
