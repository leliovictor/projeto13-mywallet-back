import { Router } from "express";

import { postSignUp, postLogin } from "../controllers/authController.js";
import { findUser, checkPassword, checkUserAlreadyExist } from "../middlewares/authMiddlewares.js";

const authRouter = Router();

authRouter.post("/signup", checkUserAlreadyExist, postSignUp);
authRouter.post("/", findUser, checkPassword, postLogin);

export default authRouter;


