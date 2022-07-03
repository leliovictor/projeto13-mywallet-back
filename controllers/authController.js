import db from "../config/db.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export async function postSignUp(req, res) {
  const newUser = req.body;
  const cryptPassword = bcrypt.hashSync(newUser.password, 10);
  try {
    const response = await db
      .collection("users")
      .insertOne({ ...newUser, password: cryptPassword });

    await db.collection("statements").insertOne({
      user_id: response.insertedId,
      walletStatement: [],
    });

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

export async function postLogin(req, res) {
  const token = uuid();

  const { name, _id } = res.locals.user;

  await db
    .collection("sessions")
    .insertOne({ userID: _id, token: token, lastStatus: Date.now() });

  const response = {
    name,
    token: token,
  };

  res.status(201).send(response);
}
