import { User } from "../../../domain/entities/user";
import { WalletService } from "../../../../wallet/services/wallet.service";

export class UserService {
  constructor(private readonly walletService: WalletService) {}

  async createUser(user: any): Promise<User> {
    const wallet = await this.walletService.createWallet(user);

    const userAccount = new User(
      "",
      user.name,
      user.email,
      user.cpf,
      user.cellPhone,
      user.birthDate,
      user.address,
      wallet
    );

    return userAccount;
  }
}
