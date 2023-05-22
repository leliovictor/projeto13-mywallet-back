import db from "../config/db.js";
import { ObjectId } from "mongodb";
import { validateInputSchema } from "../schemas/walletStatementSchema.js";

export async function checkToken(req, res, next) { //stay on middleware
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.status(401).send("Miss token from headers");

  const session = await db.collection("sessions").findOne({ token: token });

  if (!session) {
    return res.status(401).send("Invalid token");
  }

  res.locals._id = session.userID;

  next();
}

export async function findStatement(_req, res, next) { //remove
  const userStatement = await db
    .collection("statements")
    .findOne({ user_id: ObjectId(res.locals._id) });

  if (!userStatement) {
    return res.status(401).send("Wallet Statement doesn't exist");
  }

  res.locals.walletStatement = userStatement;

  next();
}

export async function validateInputValue(req, res, next) { //stay in the middleware
  const inputValidation = validateInputSchema.validate(req.body);

  if (inputValidation.error) {
    return res.status(422).send({
      message: "Invalid format login",
      detail: inputValidation.error.details[0].message,
    });
  }

  next();
}
