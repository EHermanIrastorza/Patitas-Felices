import {configureStore} from "@reduxjs/toolkit"
import userSlice from "../reducers/users/userSlice"
import turnosSlice from "../reducers/appointments/appointmentsSlice"

export default configureStore({
  reducer: {
    turnos: turnosSlice,
    user: userSlice,
  },
});