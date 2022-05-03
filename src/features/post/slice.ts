import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = any;

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    }
  },
});

export const { fetchPosts } = postSlice.actions;
export const postReducer = postSlice.reducer;
