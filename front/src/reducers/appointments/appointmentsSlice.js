import { createSlice } from "@reduxjs/toolkit";

const initialState ={
     turnos: [],
};

export const turnosSlice = createSlice({
      name: "turnos",
      initialState,
      reducers:{
      addTurnos:(state, action) =>{
        state.turnos = [...action.payload]
      }
      },
    
})

export const {removeTurnos,addTurnos} = turnosSlice.actions

export default turnosSlice.reducer;