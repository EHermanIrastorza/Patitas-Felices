import { AppDataSource } from "../config/data-Source";
import { CredentialsId } from "../Entities/CredentialEntity";

export const credentialRepository = AppDataSource.getRepository(CredentialsId);