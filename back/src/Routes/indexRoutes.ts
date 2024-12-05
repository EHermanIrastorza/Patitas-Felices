import { Router } from "express";
import userRouter from "./userRoutes";
import appointmentRouter from "./appointmentRoutes"

const indexRouter: Router = Router();



indexRouter.use("/user", userRouter);
indexRouter.use("/", appointmentRouter);



export default indexRouter;