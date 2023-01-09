import { createSlice } from "@reduxjs/toolkit";
export const listOtherProjectSlice = createSlice({
  name: "listOtherProject",
  initialState: {
    value: [],
  },
  reducers: {
    reLoadListOtherProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { reLoadListOtherProject } = listOtherProjectSlice.actions;
export default listOtherProjectSlice.reducer;
