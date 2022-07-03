import db from "../config/db.js";
import bcrypt from "bcrypt";

//Entrará o cadastro (sign Up) e o login(sign In or login);

//Objeto no formato:
/*
{
    _id: Dado pelo mongo
    name:
    email:
    password: criptografado!!!!
}*/

export async function postSignUp(req, res) {
  const newUser = req.body;
  const cryptPassword = bcrypt.hashSync(newUser.password, 10);
  try {
    await db
      .collection("users")
      .insertOne({ ...newUser, password: cryptPassword });
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

//No Login gerará um TOKEN para enviar ao front para guardar no context
//VER COMO CHECAR O TOKEN OU SE ATUALIZA O TOKEN NO STATEMENT E COMPARA AO LONGO DAS OPERAÇÕES
