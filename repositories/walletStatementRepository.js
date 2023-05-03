import db from "../config/db";

export async function getUserWallet(userId) {
    return await db
    .collection("statements")
    .findOne({ user_id: ObjectId(userId) });
}