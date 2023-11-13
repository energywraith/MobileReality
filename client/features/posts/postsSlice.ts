import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface Post {
  title: string;
  description: string;
  createdAt: string;
  id: number;
}

// Define a type for the slice state
interface PostsState {
  value: Post[];
}

// Define the initial state using that type
const initialState: PostsState = {
  value: [
    {
      title: "My first post",
      description: "This is my first post",
      createdAt: "2000-01-14T07:00:01.879Z",
      id: 1,
    },
  ],
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
});

export const { addPost } = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
