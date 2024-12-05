import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    loggin: (state) =>{
      state.loggin = true
    },

    unSetUser: (state) => {
      state.id = null;
      state.name = null;
      state.email = null;
      state.birthdate = null;
      state.nDni = null;
      state.loggin = false;; 
    },
  },
});

export const { setUser, unSetUser, loggin } = userSlice.actions;
export default userSlice.reducer;