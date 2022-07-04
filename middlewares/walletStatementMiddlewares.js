import db from "../config/db.js";
import { ObjectId } from "mongodb";

export async function checkToken(req, res, next) {
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

export async function findStatement(req, res, next) {
  const userStatement = await db
    .collection("statements")
    .findOne({ user_id: ObjectId(res.locals._id) });

    if (!userStatement) {
      return res.status(401).send("Wallet Statement doesn't exist");
    }

    res.locals.walletStatement = userStatement;
    
  next();
}
