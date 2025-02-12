import { Wallet } from "../../../../domain/entities/wallet";
import { CreateWalletDto } from "../../../../domain/usecases/createwallet.dto";
import { ICreateWalletUseCase } from "../../../../domain/usecases/createwallet.usecase";

export class CreateWallerUseCase implements ICreateWalletUseCase {
  execute(user: CreateWalletDto): Promise<Wallet> {
    return Promise.resolve(console.log("ok")) as any;
  }
}
