import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user_id: 0,
    fullname: "",
    email: "",
    avatar: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user_id = action.payload.user_id;
      state.fullname = action.payload.fullname;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
