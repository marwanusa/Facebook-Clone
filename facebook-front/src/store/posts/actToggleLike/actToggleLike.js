import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://facebook-clone-production-63aa.up.railway.app/posts";

export const actToggleLike = createAsyncThunk(
  "posts/toggleLike",
  async ({ postId, isLiked }, { getState, rejectWithValue }) => {
    try {
      const { posts } = getState(); 
      const post = posts.records.find((p) => p.id === postId); 
      if (!post) {
        return rejectWithValue("Post not found");
      }
      const updatedLikesCount = isLiked ? post.likes_count - 1 : post.likes_count + 1;
      const response = await axios.patch(`${BASE_URL}/${postId}`, {
        likes_count: updatedLikesCount, 
      });

      return { postId, isLiked };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error toggling like");
    }
  }
);
