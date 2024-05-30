import { createSlice } from "@reduxjs/toolkit";
import { loginAction, isUserLoggedIn } from "../Actions/LoginAction";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: null,
    user: "",
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
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.authenticate = true;
      })
      .addCase(isUserLoggedIn.rejected, (state, action) => {
        state.authenticate = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
