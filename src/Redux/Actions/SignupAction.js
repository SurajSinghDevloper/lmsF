import { createAsyncThunk } from "@reduxjs/toolkit";
import lmsBaseUrl from "./BaseUrlConfig";

export const signupAction = createAsyncThunk(
  "Action/signupAction",
  async (payload) => {
    const response = await fetch(`${lmsBaseUrl}/api/v1/auth/lmsb/signup`, {
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
