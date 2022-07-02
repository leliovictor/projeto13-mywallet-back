import {Router} from "express";

//import userRouter from "./userRouter.js";
import signInRouter from "./signInRouter.js";
import walletStatementRouter from "./walletStatementRouter.js";

const router = Router();

router.use(signInRouter);
router.use(walletStatementRouter);

//router.use(userRouter/example);

export default router;