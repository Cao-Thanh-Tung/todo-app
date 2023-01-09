import { createSlice } from "@reduxjs/toolkit";
export const myListProjectSlice = createSlice({
  name: "myListProject",
  initialState: {
    value: [],
  },
  reducers: {
    reLoadMyListProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { reLoadMyListProject } = myListProjectSlice.actions;
export default myListProjectSlice.reducer;
