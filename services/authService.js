import { v4 as uuid } from "uuid";



export async function postLogin(_id) {
    const token = uuid();

    await db
      .collection("sessions")
      .insertOne({ userID: _id, token: token, lastStatus: Date.now() });
    
      //chance to repository

    return token;
}