import db from "../config/db.js";
import { ObjectId } from "mongodb";

import * as service from "../services/walletStatementService.js";

export async function getStatement(_req, res) {
  const userID = res.locals._id;

  const walletStatement = await service.getStatement(userID);

  res.status(200).send(walletStatement);
}

export async function postStatement(req, res) {
  const { walletStatement, user_id } = res.locals.walletStatement;

  const { description, value } = req.body;

  await service.postStatement(user_id, walletStatement, description, value);

  return res.sendStatus(202);
}

export async function deleteStatement(req, res) {
  const { walletStatement, user_id } = res.locals.walletStatement;

  const { index } = req.params;

  await service.deleteStatement(user_id, index, walletStatement);
  
  return res.sendStatus(202);
}

export async function editStatement(req, res) {
  const { index, value, description } = req.body;
  const { walletStatement, user_id } = res.locals.walletStatement;

  await service.editStatement(user_id, walletStatement, index, value, description);

  return res.sendStatus(202);
}
