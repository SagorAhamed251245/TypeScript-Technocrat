{
  //Getter and setter
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
    /*  addDeposit(amount: number) {
      this._balance = this._balance + amount;
    }
    getBalance(): number {
      return this._balance;
    } */
    get balance(): number {
      return this._balance;
    }
    set setBalance(amount: number) {
      this._balance = amount;
    }
  }

  const goribMaus = new BankAccount(1, "Sagor", 300);

  /* goribMaus.addDeposit(1300);
  console.log({ goribMaus });
  const getBalance = goribMaus.getBalance();
  console.log({ getBalance }); */

  goribMaus.setBalance = 100;
  const getBalance = goribMaus.balance;
  console.log(getBalance);
  //
}
