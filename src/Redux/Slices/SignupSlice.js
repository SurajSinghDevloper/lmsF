import { createSlice } from "@reduxjs/toolkit";
import { signupAction } from "../Actions/SignupAction";

const signupSlice = createSlice({
  name: "signup",
  initialState: {
    data: "",
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(signupAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default signupSlice.reducer;
