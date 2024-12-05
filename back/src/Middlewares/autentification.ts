import { Request, Response, NextFunction } from "express";
import ICredentialDto from "../dto/credentialDto";
import { CredentialsId } from "../Entities/CredentialEntity";
import { User } from "../Entities/userEntity";
import { error } from "console";
import ICreateNewUserDto from "../dto/createNewUserDto";
import { kMaxLength } from "buffer";


// export const autentification = (req:Request, res: Response, next: NextFunction)=>{
//     const {token} = req.headers
//     if(token === "autentify")next()
//         else  res.status(400).json({message: "autentification fail"})
// }

export const validationsUsers = (req:Request<{},{},ICreateNewUserDto>, res:Response, next: NextFunction)=>{
    const {name, email, birthdate, nDni, password, username} = req.body;
    try {
        if(!name) throw new Error ("Field Requiered")
            if(name.length<3 || name.length>30) throw new Error ("The amount of character cant be bellow 3 and above 30")
                if (typeof name !== "string") throw new Error ("Your name can't be a number")

        if(!email) throw new Error ("Email Field Required")
         const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         if(!emailregex.test(email))throw new Error("Complete using the right characters")

        if(!birthdate) throw new Error ("Birthday Field Required")
            const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
        if(!dateRegex.test(birthdate))throw new Error ("The fields should be YYYY-MM-DD")
            const today = new Date();
        today.setHours(0,0,0,0);
        const birthdateDate = new Date(birthdate);
        const ageComprobation = new Date (today.getTime()- birthdateDate.getTime());
        const age = ageComprobation.getUTCFullYear() - 1970;
         if(age < 0) throw new Error ("the age must be higher than 0")

        if(!nDni) throw new Error ("nDni Field Required")
         if(typeof nDni !== "number") throw new Error ("need to be only numbers")
            if(nDni < 0) throw new Error ("the length should be 8 numbers.")
    
        if(!password) throw new Error ("password required")
          
        if(!username)throw new Error ("Username Field Required")

    }catch (error) {
        if (error instanceof Error){
           return res.status(404).json({error: error.message})
        }
    }
   next();
}
