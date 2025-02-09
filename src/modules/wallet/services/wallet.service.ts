import { User } from "../../user/domain/entities/user";
import { Wallet } from "../domain/entities/wallet";

export class WalletService {
  constructor() {}

  async createWallet(user: User): Promise<Wallet> {
    const walletId = "";

    const wallet = new Wallet(walletId, user._id, 0, 0, 0, 0);

    return wallet;
  }
}
