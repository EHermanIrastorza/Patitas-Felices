import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "Credential"
})
 export class CredentialsId{

    @PrimaryGeneratedColumn()
     id?: number
     
     @Column()
     username: string
     
     @Column()
     password: string
 }