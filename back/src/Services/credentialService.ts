import ICreateNewUserDto from "../dto/createNewUserDto";
import { CredentialsId } from "../Entities/CredentialEntity";
import ICredential from "../Interfaces/CredentialInterface";
import { credentialRepository } from "../repositories/repositoryIndex";


export const createCredentialService = async (createCredentialDto: CredentialsId ):Promise <CredentialsId>=> {
    const {username, password} = createCredentialDto;
    const credentialFound: CredentialsId | null = await credentialRepository.findOneBy({username})
     if(credentialFound) throw new Error ("already exist");
     const newCredential: CredentialsId = credentialRepository.create({
        username,
        password,
     });

     await credentialRepository.save(newCredential);
     return newCredential;
}

export const validateCredentialService =async(validateCredentialsDto: CredentialsId):Promise <number> => {
     const {username, password} = validateCredentialsDto;
     const credentialFound: CredentialsId | null = await credentialRepository.findOneBy({username, password})
     if(!credentialFound) throw new Error ("Incorrect Credentials");
     if(credentialFound.password !== password) throw new Error ("Incorrect Password");
     
     if(credentialFound.id) return credentialFound.id
     else {throw Error("Credential not found")}          


     
    
}