import db from "../config/db.js";

export async function loginUser(token, _id) {
  await db
    .collection("sessions")
    .insertOne({ userID: _id, token: token, lastStatus: Date.now() });
}

export async function createUser(newUser, cryptPassword) {
  const response = await db
    .collection("users")
    .insertOne({ ...newUser, password: cryptPassword });

  await createWallet(response);
}

export async function createWallet(user) {
  await db.collection("statements").insertOne({
    user_id: user.insertedId,
    walletStatement: [],
  });
}
