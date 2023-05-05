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