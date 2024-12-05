import { IAppointmentSchedule } from "../dto/appointmentSchedule";
import { Appointment } from "../Entities/AppointmentEntity"
import { statusAppoitment } from "../Interfaces/appoitmentInterface";
import { appoitmentRepository } from "../repositories/AppointmentRepository";
import { userRepository } from "../repositories/IndexRepository";


export const getAllAppointmentService = async ():Promise<Appointment[]>=>{
    const Appointments: Appointment[] = await appoitmentRepository.find();
    return Appointments;
};
    

export const getAppointmentServiceByID = async (appointmentId: number):Promise <Appointment>=> {
    const appointmentbyID: Appointment | null = await appoitmentRepository.findOneBy({
        id: appointmentId,
    })
     if (!appointmentbyID) throw new Error ("Appointment not found");
     return appointmentbyID
    }

export const registerScheduleService = async(AppointmentSchedule: IAppointmentSchedule):Promise<Appointment> => {
     const {date, time, userId, description} = AppointmentSchedule;
     const user = await userRepository.findOneBy({id: userId})
     if(!user) throw new Error ("Can't find that Username")
     const newAppoitment: Appointment = appoitmentRepository.create({
    date, time, description});
    newAppoitment.user = user;
   await appoitmentRepository.save(newAppoitment)
   return newAppoitment;
}


export const cancelAppointmentService = async (appointmentId: number):Promise <statusAppoitment>=>{
 const appointment: Appointment | null = await appoitmentRepository.findOneBy({id: appointmentId});
 if(!appointment) throw new Error ("Appointment not found");
 appointment.status = statusAppoitment.cancel;
 await appoitmentRepository.save(appointment);   
 return statusAppoitment.cancel
}

export const getAppointmentByUser = async(userId: number):Promise <Appointment[]>=> {
    const appointmentbyUser: Appointment[] | null = await appoitmentRepository.findBy({
        userId
    })
     if (!appointmentbyUser) throw new Error ("Appointment not found");
     return appointmentbyUser
    
    }