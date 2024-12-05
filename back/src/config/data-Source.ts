import { DataSource } from "typeorm";
import { User } from "../Entities/userEntity";
import { Appointment } from "../Entities/AppointmentEntity";
import { CredentialsId } from "../Entities/CredentialEntity";
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from "./envs";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    synchronize: true,
    dropSchema: false,
    logging: false,
    entities: [User,Appointment,CredentialsId],
    subscribers: [],
    migrations: [],
});