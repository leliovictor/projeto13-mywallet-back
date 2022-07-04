import { Router } from "express";

import {
  getStatement,
  postStatement,
} from "../controllers/walletStatementController.js";
import {
  checkToken,
  findStatement,
  validateInputValue
} from "../middlewares/walletStatementMiddlewares.js";

const walletStatementRouter = Router();

walletStatementRouter.get("/home", checkToken, getStatement);
walletStatementRouter.post("/home", checkToken, findStatement, validateInputValue, postStatement);

export default walletStatementRouter;
