import { createSlice } from "@reduxjs/toolkit";

const pageType = createSlice({
  name: "pageType",
  initialState: "feature",
  reducers: {
    setPageType: (state, action) => action.payload,
  },
});

export const { setPageType } = pageType.actions;
export default pageType.reducer;
