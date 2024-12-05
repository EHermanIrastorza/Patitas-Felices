import { AppDataSource } from "../config/data-Source";
import { Appointment } from "../Entities/AppointmentEntity";

export const appoitmentRepository = AppDataSource.getRepository(Appointment)