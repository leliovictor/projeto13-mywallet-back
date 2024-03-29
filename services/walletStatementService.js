import dayjs from "dayjs";

import * as repository from "../repositories/walletStatementRepository.js";

export async function getStatement(userId) {
    const { walletStatement } = await repository.findUserWalletByUserId(userId);

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

    await repository.editStatement(user_id, walletStatement);
}



//----------------------------------------------------------------
//----------------------------------------------------------------
// FUNÇÔES AUXILIARES QUE AINDA NÂO ESTÃO EM USO!!!!
//----------------------------------------------------------------
//----------------------------------------------------------------

export async function checkIfStatementExist(_id) {
    const userStatement = await repository.findUserWalletByUserId(_id);
  
    if (!userStatement) {
      return res.status(401).send("Wallet Statement doesn't exist");
    }
  
    return userStatement;
  }
