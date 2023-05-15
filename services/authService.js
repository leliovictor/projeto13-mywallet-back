import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

import * as repository from "../repositories/authRepository.js";

export async function postLogin(_id) {
  const token = uuid();

  await repository.loginUser(token, _id);

  return token;
}

export async function postSignUp(newUser) {
  const cryptPassword = bcrypt.hashSync(newUser.password, 10);

  await repository.createUser(newUser, cryptPassword);
}

//----------------------------------------------------------------
//----------------------------------------------------------------
// FUNÇÔES AUXILIARES QUE AINDA NÂO ESTÃO EM USO!!!!
//----------------------------------------------------------------
//----------------------------------------------------------------

export async function checkUserAlreadyExist(email) {
  const user = await db.collection("users").findOne({email}); //Criar funções menores no repository para isso.

  //Criar um throw para os erros.
  if(user) return res.status(403).send("Email already in use");
}