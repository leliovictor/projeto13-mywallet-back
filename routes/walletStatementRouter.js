import { Router } from "express";

import { getStatement } from "../controllers/walletStatementController.js";
import { checkToken} from "../middlewares/walletStatementMiddlewares.js";

const walletStatementRouter = Router();

walletStatementRouter.get("/home", checkToken, getStatement);

//authRouter.post("/", findUser, checkPassword, postLogin);

export default walletStatementRouter;