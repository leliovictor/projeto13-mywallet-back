import { Router } from "express";

import { postSignUp } from "../controllers/authController.js";

/*import {
    validateParticipant,
    checkParticipantOn,
  } from "../middlewares/participantMiddleware.js";
  import {
    postParticipants,
    getParticipants,
  } from "../controllers/participantsController.js";
 -> EXAMPLE */

const authRouter = Router();

authRouter.post("/signup", postSignUp);

export default authRouter;

//import
//signInRouter.post/get("/ROTA",middlewares,post/getcontrollers);
