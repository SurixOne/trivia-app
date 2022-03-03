import { createSlice } from "@reduxjs/toolkit";

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
