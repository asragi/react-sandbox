import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = any;

interface PostState {
  posts: Post[];
}

const initialState: PostState = {
  posts: [],
};

export const fetchPosts = (state: PostState, action: PayloadAction<Post[]>) => {
  state.posts = action.payload;
}

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts
  },
});

export const postReducer = postSlice.reducer;
