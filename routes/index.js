import {Router} from "express";

import authRouter from "./authRouter.js";
import walletStatementRouter from "./walletStatementRouter.js";

const router = Router();

router.use(authRouter);
router.use(walletStatementRouter);

export default router;