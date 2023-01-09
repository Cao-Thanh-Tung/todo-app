import { createSlice } from "@reduxjs/toolkit";
export const currentProjectInfoSlide = createSlice({
  name: "currentProjectInfo",
  initialState: {
    project_status: undefined,
    project_description: "",
    leader: null,
  },
  reducers: {
    reLoadCurrentProjectInfo: (state, action) => {
      state.project_status = action.payload.project_status;
      state.project_description = action.payload.project_description;
      state.leader = action.payload.leader;
    },
  },
});

export const { reLoadCurrentProjectInfo } = currentProjectInfoSlide.actions;
export default currentProjectInfoSlide.reducer;
