import { Router } from "express";
import registerUserController from "../controllers/registerController";
import signInController from "../controllers/signInController";

const authRouter: Router = Router();

authRouter.post("/sign-in", signInController);

authRouter.post("/register", registerUserController);

export default authRouter;
