import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { fetchPosts } from "./postsThunks";

export interface Post {
  title: string;
  description: string;
  createdAt: string;
  id: number;
}

// Define a type for the slice state
interface PostsState {
  value: Post[];
  isLoading: boolean;
}

// Define the initial state using that type
const initialState: PostsState = {
  value: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addPost: (state) => {
      state.value = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addPost } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
