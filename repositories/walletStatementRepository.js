import db from "../config/db";
import { ObjectId } from "mongodb";

export async function findUserWalletByUserId(userId) {
    return await db
    .collection("statements")
    .findOne({ user_id: ObjectId(userId) });
}

export async function postUserWallet(userId, newStatement) {
    await db
    .collection("statements")
    .updateOne(
      { user_id: userId },
      { $set: { walletStatement: newStatement } }
    );
}

export async function deleteStatement(user_id, walletStatement) {
  await db
  .collection("statements")
  .updateOne({ user_id: user_id }, { $set: { walletStatement } }); 
}

export async function editStatement(user_id, walletStatement) {
  await db
  .collection("statements")
  .updateOne({ user_id: user_id }, { $set: { walletStatement } });
}