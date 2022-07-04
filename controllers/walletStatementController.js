import db from "../config/db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

//Entrará a função aqui de:
//GET - Pegar o extrato
//POST - Adicionar entrada ou saída
//Quero um objeto no formato:

/*
{
  _id: referência a pessoa que é dona disso,
  statement: [{date:DD/MM/YYYY,description:, value:, type:(deposit or withdraw)},],
  token?
}
*/

export async function getStatement(_req, res) {
  const userID = res.locals._id;

  const { walletStatement } = await db
    .collection("statements")
    .findOne({ user_id: ObjectId(userID) });

  res.status(200).send(walletStatement);
}

export async function postStatement(req, res) {
  const { walletStatement, user_id } = res.locals.walletStatement;

  const { description, value } = req.body;

  const operation = value > 0 ? "debit" : "credit";

  const newOperation = {
    date: dayjs().format("DD/MM"),
    description,
    value: Math.abs(value).toFixed(2),
    type: operation,
  };

  const updateStatement = [newOperation, ...walletStatement];

  try {
    await db
      .collection("statements")
      .updateOne(
        { user_id: user_id },
        { $set: { walletStatement: updateStatement } }
      );

    res.sendStatus(202);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function deleteStatement(req, res) {
  const { walletStatement, user_id } = res.locals.walletStatement;

  const {index} = req.params;

  walletStatement.splice(index, 1);

  try {
    await db
      .collection("statements")
      .updateOne(
        { user_id: user_id },
        { $set: { walletStatement } }
      );

    res.sendStatus(202);
  } catch (err) {
    res.sendStatus(500);
  }
}
