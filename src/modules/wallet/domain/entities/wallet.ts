export class Wallet {
  constructor(
    private readonly id: string,
    private readonly ownerId: string,
    private accountBalance: number,
    private entries: any,
    private exits: any,
    private transactions: any
  ) {
    this.id = "e"
  }

  get _id(): string {
    return this.id;
  }

  get _ownerId(): string {
    return this.ownerId;
  }

  get _accountBalance(): number {
    return this.accountBalance;
  }

  get _entries(): any {
    return this.entries;
  }

  get _exits(): any {
    return this.exits;
  }

  get _transactions(): any {
    return this.transactions;
  }

  set _addValueCurrentBalance(value: number) {
    this.accountBalance += value;
  }

  set _removeValueCurrentBalance(value: number) {
    this.accountBalance -= value;
  }
}
