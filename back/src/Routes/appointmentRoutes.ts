import { Router } from "express"
import { getAllAppointment, getAppointmentByID,registerSchedule, cancelAppointment, byuserID } from "../Controllers/appointmentController"
import { validateAppointment } from "../Middlewares/AppointmentMiddleware"

const appointmentRouter: Router = Router()

appointmentRouter.get("/turns", getAllAppointment)
appointmentRouter.get("/turns/:id",getAppointmentByID)
appointmentRouter.post("/turns/schedule",validateAppointment,registerSchedule)
appointmentRouter.put("/turns/cancel/:id",cancelAppointment)
appointmentRouter.get("/turns/byuser/:id",byuserID)


export default appointmentRouter