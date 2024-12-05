import { Request, Response, NextFunction } from "express";
import { IAppointmentSchedule } from "../dto/appointmentSchedule";

export const validateAppointment = (req: Request<{},{},IAppointmentSchedule>, res: Response, next: NextFunction)=>{

    const { date, time, description } = req.body

    try {
         
      if(!date) throw new Error ("Date field is required");
      const appointmentDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);    
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 0);
      const in14Days = new Date(today);
      in14Days.setDate(today.getDate() + 14); 
      if (appointmentDate <= tomorrow || appointmentDate >= in14Days) {
          throw new Error("The Date must be between tomorrow and 14 days from today");
      }

      if (!time) throw new Error ("Time field is required")
        const validTimes =[
              "09:00",
              "09:30",
              "10:00",
              "10:30",
              "11:00",
              "11:30",
              "12:00",
              "12:30",
              "13:00",
              "13:30",
              "14:00",
              "14:30",
              "15:00",
              "15:30",
              "16:00",
              "16:30",
              "17:00",
              "17:30",
                ];
            if(!validTimes.includes(time)){
                throw new Error ("Time must be between 09:00hs - 17:30hs");
            }
        if (!description) throw new Error ("Description field required");
        if (typeof description !== "string") throw new Error("The field must be a string");

    } catch (error) {
        if (error instanceof Error){
            return res.status(404).json({error: error.message});
        }
    }
    next ();
}

