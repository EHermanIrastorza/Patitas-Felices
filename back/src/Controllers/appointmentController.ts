import { Request, Response } from "express";
import {getAllAppointmentService, getAppointmentServiceByID, registerScheduleService, cancelAppointmentService, getAppointmentByUser} from "../Services/appointmeServices" 
import { Appointment } from "../Entities/AppointmentEntity";
import { IAppointmentSchedule } from "../dto/appointmentSchedule";

export const getAllAppointment = async (req: Request, res: Response)=>{
   try {
      const allAppoinments: Appointment[]= await getAllAppointmentService();
      res.status(200).json(allAppoinments)
   } catch (error: any) {
      res.status (404).json({error: error.message});
   }
}

export const getAppointmentByID = async (req: Request<{id: string}>, res: Response)=>{
   const{id} = req.params
   try {
      const appointment = await getAppointmentServiceByID(Number(id));
      res.status(200).json(appointment)
   } catch (error: any) {
      res.status (404).json({error: error.message});
   }
 }

export const registerSchedule = async (req: Request<{},{}, IAppointmentSchedule>, res: Response)=>{
   const {date, time, userId, description} = req.body
   console.log(req.body);
   try {
      const newAppoitment = await registerScheduleService({date, time, userId, description})
      res.status(201).json(newAppoitment)
   } catch (error: any) {
      res.status (404).json({error: error.message});  
   }
 }

export const cancelAppointment = async (req: Request<{id: string}>, res: Response)=>{
   const {id} = req.params;
   try {
      await cancelAppointmentService(Number(id))
      res.status(200).json({message: `Appointment: ${id} Cancelled`})
   } catch (error: any) {
      res.status (404).json({error: error.message});
   }
 }

 export const byuserID = async (req: Request<{id: string}>, res: Response)=>{
   const{id} = req.params
   try {
      const appointment = await getAppointmentByUser(Number(id));
      res.status(200).json(appointment)
   } catch (error: any) {
      res.status (404).json({error: error.message});
   } 
 } 