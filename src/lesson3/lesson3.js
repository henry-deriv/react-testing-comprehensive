class BankError extends Error {
  constructor(message, amount){
    super(message);
    this.amount = amount;
  }

  toString(){
    return `${this.message}, amount: ${this.amount}`;
  }
};

class BankAccount {

  static OVERDRAFT_LIMIT = -1000;

  constructor(name) {
    this.name = name;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    const newBalance = this.balance - amount;
    if(newBalance < BankAccount.OVERDRAFT_LIMIT){
      throw new BankError('Insufficient funds', amount);
    }
    this.balance -= amount;
  }
}

function add(a, b) {
  return a + b;
}

function getGrade(score) {
  const status = isValid(score);
  if(status !== 'ok') {
    return status;
  }

  if(score >= 70) {
    return 'A';
  } else if(score >= 60) {
    return 'B';
  } else if(score >= 50) {
    return 'C';
  } else {
    return 'Fail';
  }
}

function isValid(score) {
  if (score < 0) {
    return 'Too low';
  } else if(score > 100) {
    return 'Too high'; 
  } else {
    return 'ok';
  }
}

module.exports = {
  BankAccount,
  BankError,
  add,
  getGrade,
  isValid,
};