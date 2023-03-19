class BankAccount {
  constructor(){
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawl(amount) {
    if(amount > this.balance) {
      throw(new Error(`Withdrawl exceeds your balance of ${this.balance}`));
    }
    this.balance -= amount;
  }
}

module.exports = BankAccount;