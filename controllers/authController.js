import * as service from "../services/authService.js";

export async function postSignUp(req, res) {
  const newUser = req.body;

  await service.postLogin(newUser);

  return res.sendStatus(201);
}

export async function postLogin(_req, res) {

  const { name, _id } = res.locals.user;

  const token = service.postLogin(_id);

  const response = {
    name,
    token: token,
  };

  return res.status(201).send(response);
}
