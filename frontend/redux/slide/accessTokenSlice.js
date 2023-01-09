import { createSlice } from "@reduxjs/toolkit";
export const accessTokenSlice = createSlice({
  name: "accessToken",
  initialState: {
    value: null,
  },
  reducers: {
    addOrChangeAccessToken: (state, action) => {
      state.value = action.payload.accessToken;
    },
    removeAccessToken: (state) => {
      state.value = null;
    },
  },
});

export const { addOrChangeAccessToken, removeAccessToken } =
  accessTokenSlice.actions;
export default accessTokenSlice.reducer;
