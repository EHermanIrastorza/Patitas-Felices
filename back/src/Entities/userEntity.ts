import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { CredentialsId } from "./CredentialEntity"
import { Appointment } from "./AppointmentEntity"

@Entity({
    name: "Users"
})
export class User{


    @PrimaryGeneratedColumn()
    id: number
    
    @Column({

        length: 50 
    })
    name: string
    
    @Column({
        unique: true,
        length: 50 
    })
    email: string
    
    @Column()
    birthdate: string
    
    @Column({

        length: 50 
    })
    @Column()
    nDni: number
    
    @OneToOne(() => CredentialsId)
    @JoinColumn()
    credentialsId: CredentialsId

    @OneToMany(() => Appointment, (Appointment) => Appointment.userId)
    user: Appointment[]
}

