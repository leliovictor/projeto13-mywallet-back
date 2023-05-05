import db from "../config/db";

export async function getUserWallet(userId) {
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