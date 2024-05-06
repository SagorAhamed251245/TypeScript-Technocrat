"use strict";
{
    //access modifiers
    class BankAccount {
        constructor(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        addDeposit(amount) {
            this._balance = this._balance + amount;
        }
        getBalance() {
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
