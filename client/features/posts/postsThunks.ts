import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const response = await fetch("http://localhost:3005/posts", {
      headers: {
        "x-api-key": "thisisapikey",
      },
    });

    const responseJSON = await response.json();

    return responseJSON;
  }
);
