import { Wallet } from "../entities/wallet";
import { CreateWalletDto } from "./createwallet.dto";

export interface ICreateWalletUseCase {
  execute(user: CreateWalletDto): Promise<Wallet>;
}