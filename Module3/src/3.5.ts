{
  //access modifiers
  class BankAccount {
    readonly id: number;
    public name: string;
    // private _balance: number;
    protected _balance: number;

    constructor(id: number, name: string, _balance: number) {
      this.id = id;
      this.name = name;
      this._balance = _balance;
    }
    addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance(): number {
      return this._balance;
    }
  }

  const goribMaus = new BankAccount(1, "Sagor", 300);

  goribMaus.addDeposit(1300);
  console.log({ goribMaus });
  const getBalance = goribMaus.getBalance();
  console.log({ getBalance });
  //
}
