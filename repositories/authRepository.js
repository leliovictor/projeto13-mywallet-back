import db from "../config/db.js";

export async function loginUser(token, _id) {
    await db
      .collection("sessions")
      .insertOne({ userID: _id, token: token, lastStatus: Date.now() });
}