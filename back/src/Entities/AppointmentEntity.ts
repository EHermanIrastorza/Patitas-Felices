import {PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "./userEntity";
import { statusAppoitment } from "../Interfaces/appoitmentInterface";

@Entity({
 name: "Appointment"
})

export class Appointment{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: string
    
    @Column()
    time: string
    
    @Column()
    userId: number
    
    @Column({
        default: statusAppoitment.active,
    })
    status: statusAppoitment
    
    @Column()
    description: string

    @ManyToOne(() => User, (user) => user.user)
    user: User
}

