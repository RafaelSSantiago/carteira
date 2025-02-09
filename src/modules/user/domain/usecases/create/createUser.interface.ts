export interface ICreateUser {
  id: string;
  name: string;
  email: string;
  cpf: string;
  cellPhone: string;
  birthDate: string;
  address: Address;
  wallet: Wallet;
}

interface Address {}

interface Wallet {}
