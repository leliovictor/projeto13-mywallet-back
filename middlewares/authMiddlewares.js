import db from "../config.js";
import bcrypt from "bcrypt";
import { loginSchema, signUnSchema } from "../schemas/authSchema.js";

export async function findUser(req, res, next) { //blz
  const userValidation = loginSchema.validate(req.body);

  if (userValidation.error) {
    return res.status(422).send({
      message: "Invalid format login",
      detail: userValidation.error.details[0].message,
    });
  }

  const { email } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (!user) return res.status(401).send("E-mail or Password incorrect!");

  res.locals.user = user;

  next();
}

export async function checkPassword(req, res, next) { //blz
  const { password } = req.body;

  const confirmPassword = bcrypt.compareSync(
    password,
    res.locals.user.password
  );

  if (!confirmPassword)
    return res.status(401).send("E-mail or Password incorrect!");

  next();
}

export async function checkUserAlreadyExist(req, res, next) { //blz
  const userValidation = signUnSchema.validate(req.body);

  if (userValidation.error) {
    return res.status(422).send({
      message: "Invalid format",
      detail: userValidation.error.details[0].message,
    });
  }

  const { email } = req.body;
  const user = await db.collection("users").findOne({email});

  if(user) return res.status(403).send("Email already in use");

  next();
}
