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
  const user = await repository.findUserByEmail(email);

  //Criar um throw para os erros.
  if(user) return res.status(403).send("Email already in use");
}

export async function validatePassword(password, hashPassword) {
  const confirmPassword = bcrypt.compareSync(
    password,
    hashPassword
  );

  if (!confirmPassword)
    return res.status(401).send("E-mail or Password incorrect!");
}