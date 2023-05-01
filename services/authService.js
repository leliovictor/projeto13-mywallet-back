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
