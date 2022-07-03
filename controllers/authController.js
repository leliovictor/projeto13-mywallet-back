import db from "../config/db.js";
import bcrypt from "bcrypt";

//SIGNUP
//CRIAR USUARIO - OK
//CRIAR USUARIO NO STATEMENTS - OK
//VALIDAR USUARIO - (checar se já tem login ou email cadastrado)

//LOGIN
//Objeto no formato:

export async function postSignUp(req, res) {
  const newUser = req.body;
  const cryptPassword = bcrypt.hashSync(newUser.password, 10);
  try {
    const response = await db
      .collection("users")
      .insertOne({ ...newUser, password: cryptPassword });

    await db
      .collection("statements")
      .insertOne({
        user_id: response.insertedId,
        walletStatement: []
      });

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

//No Login gerará um TOKEN para enviar ao front para guardar no context
//VER COMO CHECAR O TOKEN OU SE ATUALIZA O TOKEN NO STATEMENT E COMPARA AO LONGO DAS OPERAÇÕES
