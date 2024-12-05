import cors from "cors"
import morgan from "morgan";
import express from "express";
import indexRouter from "./Routes/indexRoutes";

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));
server.use(indexRouter);

export default server;