import { v4 as uuid } from "uuid";

import * as repository from "../repositories/authRepository.js";

export async function postLogin(_id) {
    const token = uuid();

    await repository.createUser(token, _id);

    return token;
}