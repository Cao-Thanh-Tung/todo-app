import { createSlice } from "@reduxjs/toolkit";
export const listMissionSlide = createSlice({
  name: "listMission",
  initialState: {
    value: [],
  },
  reducers: {
    reLoadListMission: (state, action) => {
      state.value = action.payload.listMission;
    },
  },
});

export const { reLoadListMission } = listMissionSlide.actions;
export default listMissionSlide.reducer;
