import { Request, Response, NextFunction } from "express";
import ICredentialDto from "../dto/credentialDto";

export const validatieCredentials = (req:Request<{},{},ICredentialDto>, res: Response, next: NextFunction) => {

    const {username, password} = req.body;

    try {
        if (!username) throw new Error("username field required");
        if (!password) throw new Error ("Passworld field required");

    } catch (error) {
        if (error instanceof Error){
           return res.status(404).json({error: error.message});
        }
    }

     next();
};