import { AppDataSource } from "../config/data-Source";
import { User } from "../Entities/userEntity";

export const userRepository = AppDataSource.getRepository(User);