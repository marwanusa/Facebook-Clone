import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetPosts = createAsyncThunk(
    "posts/getPosts",
    async (_,thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try{
            const response = await axios.get('http://localhost:5005/posts');
            return response.data;
        }catch (error) {
            if (axios.isAxiosError(error)) {
              return rejectWithValue(error.response?.data.message || error.message);
            } else {
              return rejectWithValue("An unexpected error");
            }
          }
    }
)
export default actGetPosts;