import { Wallet } from "../../../wallet/domain/entities/wallet";

interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
}
export class User {
  constructor(
    private readonly id: string,
    private name: string,
    private email: string,
    private cpf: string,
    private cellPhone: string,
    private birthDate: string,
    private address: Address,
    private wallet: Wallet
  ) {}

  get _id(): string {
    return this.id;
  }

  get _name(): string {
    return this.name;
  }

  get _email(): string {
    return this.email;
  }

  get _cpf(): string {
    return this.cpf;
  }

  get _cellPhone(): string {
    return this.cellPhone;
  }

  get _birthDate(): string {
    return this.birthDate;
  }

  get _address(): Address {
    return this.address;
  }

  get _wallet(): Wallet {
    return this.wallet;
  }

  set _wallet(wallet: Wallet) {
    this.wallet = wallet;
  }
}
