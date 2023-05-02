import db from "../config/db.js";

export async function getStatement() {
    const { walletStatement } = await db
    .collection("statements")
    .findOne({ user_id: ObjectId(userID) });

    return walletStatement;
}