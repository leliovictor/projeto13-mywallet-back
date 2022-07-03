import db from "../config/db.js";

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

pergunta: terá dois _id? Que o mongo cria quando cria um novo objeto e o id do usuario? Checar isso;
*/
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