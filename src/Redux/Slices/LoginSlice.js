import { createSlice } from "@reduxjs/toolkit";
import {
  loginAction,
  isUserLoggedIn,
  logoutAction,
} from "../Actions/LoginAction";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: null,
    loading: false,
    authenticate: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.accessToken;
        state.user = action.payload.user;
        state.authenticate = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(isUserLoggedIn.fulfilled, (state, action) => {
        state.authenticate = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(isUserLoggedIn.rejected, (state, action) => {
        state.authenticate = false;
        state.token = null;
        state.user = null;
        state.error = action.payload.error;
      })
      // Add cases for logoutAction
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.loading = false;
        state.authenticate = false; // Set authentication status to false upon successful logout
        state.token = null;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
