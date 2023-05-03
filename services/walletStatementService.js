import * as repository from "../repositories/walletStatementRepository.js";

export async function getStatement(userId) {
    const { walletStatement } = await repository.getUserWallet(userId);

    return walletStatement;
}