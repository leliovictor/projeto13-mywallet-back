import db from "../config/db.js";

export async function postStatement(req, res) {
    /*Example
    try {
      const findUser = await db.collection("users").findOne({ name: user });
      if (!findUser) return res.sendStatus(404);
  
      await db
        .collection("users")
        .updateOne({ name: user }, { $set: { lastStatus: Date.now() } });
  
      res.sendStatus(200);
    } catch {
      res.sendStatus(500);
    } */
  };

//Quem fará o post/get e etc, serão as routes, aqui virá só a função (SEM A VALIDAÇÃO);