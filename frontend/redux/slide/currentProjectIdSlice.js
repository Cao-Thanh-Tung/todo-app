import { createSlice } from "@reduxjs/toolkit";
export const currentProjectIdSlice = createSlice({
  name: "currentProjectId",
  initialState: {
    value: undefined,
  },
  reducers: {
    setCurrentProjectId: (state, action) => {
      state.value = action.payload.projectId;
    },
  },
});

export const { setCurrentProjectId } = currentProjectIdSlice.actions;
export default currentProjectIdSlice.reducer;
