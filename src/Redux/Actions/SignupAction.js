import { createAsyncThunk } from "@reduxjs/toolkit";
export const signupAction = createAsyncThunk(
  "Action/signupAction",
  async (payload) => {
    const response = await fetch("http://localhost:8080/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  }
);
