import dayjs from "dayjs";

import * as repository from "../repositories/walletStatementRepository.js";

export async function getStatement(userId) {
    const { walletStatement } = await repository.getUserWallet(userId);

    return walletStatement;
}

export async function postStatement(userId, walletStatement, description, value) {
    const operation = value > 0 ? "debit" : "credit";

    const newOperation = {
        date: dayjs().format("DD/MM"),
        description,
        value: Math.abs(value).toFixed(2),
        type: operation,
      };
    
    const updateStatement = [newOperation, ...walletStatement];

    await repository.postUserWallet(userId, updateStatement);
}

export async function deleteStatement(user_id, index, walletStatement) {
    walletStatement.splice(index, 1);

    await repository.deleteStatement(user_id, walletStatement);
}

export async function editStatement(user_id, walletStatement, index, value, description) {
    walletStatement[index] = {
        ...walletStatement[index],
        value: Math.abs(value).toFixed(2),
        description,
    };

    await db
      .collection("statements")
      .updateOne({ user_id: user_id }, { $set: { walletStatement } });
}