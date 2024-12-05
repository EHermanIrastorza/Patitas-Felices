import { Request, Response } from "express";
import { serviceUser, getServiceUser, getServiceUserId, findLoginUsersById } from "../Services/userServices";
import IUser from "../Interfaces/userInterface";
import ICreateNewUserDto from "../dto/createNewUserDto";
import { error } from "console";
import { validateCredentialService } from "../Services/credentialService";
import { User } from "../Entities/userEntity";
import { CredentialsId } from "../Entities/CredentialEntity";

export const getAllUser = async (req: Request, res: Response)=>{
   try{
      const users: User[] = await getServiceUser();
      res.status(200).json(users)
   }catch{
        res.status(404).json({message:"Ysers Not Found."}) 
   }
}

export const userById = async (req: Request<{id: string}>, res: Response)=>{
    try {
       const id =Number(req.params.id)
       const user: User = await getServiceUserId(id)
       res.status(200).json (user)
    } catch (error: any) {
      res.status(404).json({message: error.message})
      
    }
   }
   
   export const registerUser = async (req: Request<{},{},ICreateNewUserDto>, res: Response)=>{
      try {
         const {name, password, email, birthdate, nDni, username} = req.body;
         const newIdUser: User = await serviceUser({name, password, email, birthdate, nDni, username})
         res.status(200).json(newIdUser)
      } catch (error: any) {
         res.status(404).json({message: error.message})
      }
 }

export const loginUser = async (req: Request<{},{},CredentialsId>, res: Response)=>{
   try {
      const {username, password} = req.body;
      const credentialid = await validateCredentialService({username, password})
      const user: User = await findLoginUsersById(credentialid)
      res.status(200).json({login: true, user});
   } catch (error:any) {
      res.status (404).json({message: error.message});
   }
 }