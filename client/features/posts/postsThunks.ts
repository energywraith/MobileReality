import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetch", async () => {
  const response = await fetch("http://localhost:3005/posts", {
    headers: {
      "x-api-key": "thisisapikey",
    },
  });

  const responseJSON = await response.json();

  return responseJSON;
});

export const addPost = createAsyncThunk(
  "posts/add",
  async (body: { title: string; description: string }) => {
    const response = await fetch(`http://localhost:3005/posts`, {
      method: "POST",
      headers: {
        "x-api-key": "thisisapikey",
      },
      body: JSON.stringify({
        ...body,
        createdAt: new Date().toISOString(),
      }),
    });

    const responseJSON = await response.json();

    return responseJSON;
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id: string) => {
    const response = await fetch(`http://localhost:3005/posts/${id}`, {
      method: "DELETE",
      headers: {
        "x-api-key": "thisisapikey",
      },
    });

    const responseJSON = await response.json();

    return responseJSON;
  }
);
