import { promises } from "dns"
import IUserDto from "../dto/userDto"
import IUser from "../Interfaces/userInterface"
import ICreateNewUserDto from "../dto/createNewUserDto"
import { createCredentialService } from "./credentialService"
import ICredential from "../Interfaces/CredentialInterface"
import { User } from "../Entities/userEntity"
import { userRepository } from "../repositories/IndexRepository"
import { CredentialsId } from "../Entities/CredentialEntity"
import { Appointment } from "../Entities/AppointmentEntity"
import ICredentialDto from "../dto/credentialDto"


export const getServiceUser = async ():Promise<User[]>=>{
    const allUsers: User[] = await userRepository.find({
        relations:{credentialsId: true}
    });
    return allUsers;
}

export const getServiceUserId = async (id: number):Promise<User> => {
     const user: User | null = await userRepository.findOne({where: {id}, relations:["Appointment"] })
        if(!user) throw new Error ("User not found") 
            return user;
    }

export const serviceUser = async(createUserData: ICreateNewUserDto):Promise<User> => {
    const { name,email,birthdate,nDni,password,username} = createUserData;
    const dataCredetial: CredentialsId  = {password, username}
    const foundUser: User | null = await userRepository.findOneBy({email})
    if(foundUser) throw new Error ("Mail already in use");

    const newCredential: CredentialsId = await createCredentialService(dataCredetial);

    const newUser:User=userRepository.create({   
         name,
         email,
         birthdate,
         nDni,
    });
      newUser.credentialsId = newCredential;
      await userRepository.save(newUser);
      
         return newUser
    }     
    
    export const findLoginUsersById = async (credentialId: number) => {
        const user: User | null = await userRepository.findOneBy({
            credentialsId: {id: credentialId}
        });
        if(!user) throw new Error("User doesn't exist")
       return user;
    }

        
        




