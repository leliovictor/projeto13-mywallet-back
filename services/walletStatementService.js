import * as repository from "../repositories/walletStatementRepository.js";

export async function getStatement(userId) {
    const { walletStatement } = await repository.getUserWallet(userId);

    return walletStatement;
}

export async function postStatement(userId, newStatement) {

    await repository.postUserWallet(userId, newStatement); //Passar as regras de negócio para cá!

}