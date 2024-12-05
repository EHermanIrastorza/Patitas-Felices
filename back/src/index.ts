import server from "./server";
import "reflect-metadata";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/data-Source";


 AppDataSource.initialize()
 .then(()=>{
     console.log("conexión con la base de datitos")
     server.listen(PORT, ()=>{
         console.log(`servidor escuchando en ${PORT}`)
     })
 }).catch(error=> console.log(error));
 

