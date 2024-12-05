import { Router } from "express";
import { getAllUser, userById, registerUser, loginUser,   } from "../Controllers/userController";
import { validationsUsers } from "../Middlewares/autentification";
import { validatieCredentials } from "../Middlewares/CredentialMiddleware";


const userRouter: Router = Router();

userRouter.get("/", getAllUser);
userRouter.get("/:id", userById);
userRouter.post("/register",validationsUsers, registerUser);
userRouter.post("/login",validatieCredentials,loginUser);

export default userRouter;