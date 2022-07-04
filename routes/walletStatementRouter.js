import { Router } from "express";

import {
  getStatement,
  postStatement,
  deleteStatement
} from "../controllers/walletStatementController.js";
import {
  checkToken,
  findStatement,
  validateInputValue
} from "../middlewares/walletStatementMiddlewares.js";

const walletStatementRouter = Router();

walletStatementRouter.get("/home", checkToken, getStatement);
walletStatementRouter.post("/home", checkToken, findStatement, validateInputValue, postStatement);
walletStatementRouter.delete("/home/:index", checkToken, findStatement, deleteStatement);

export default walletStatementRouter;
