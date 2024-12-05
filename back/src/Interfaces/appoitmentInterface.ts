export enum statusAppoitment{
  active = "active",   
  cancel = "cancel"
} 

export interface IAppointment {
    id: number;
    date: string;
    time: string;
    userId: number;
    status: statusAppoitment;
    description: string,
};

