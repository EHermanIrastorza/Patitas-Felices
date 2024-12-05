import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newuser: []
};

export const newUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push = action.payload;
    },
  },
});

export const { addUser } = newUserSlice.actions;
export default newUserSlice.reducer;