import { createSlice } from "@reduxjs/toolkit";

export const nameSelector = (state) => state.user.name;
export const isLoggedInSelector = (state) => state.user.isLoggedIn;

const initialUserState = { name: "", isLoggedIn: false };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
