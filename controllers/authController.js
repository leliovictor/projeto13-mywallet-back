import * as service from "../services/authService.js";

export async function postSignUp(req, res) {
  const newUser = req.body;

  await service.postSignUp(newUser);

  return res.sendStatus(201);
}

export async function postLogin(req, res) {

  const user = req.body;

  //const { name, _id } = res.locals.user;

  const response = await service.postLogin(user);

  return res.status(201).send(response);
}
