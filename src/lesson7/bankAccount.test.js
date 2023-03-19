const BankAccount = require('./bankAccount');

describe('BankAccount class', () => {
  test('account created, zeo balance initially', () => {
    const acc = new BankAccount();
    expect(acc.balance).toBe(0);
  });

  test('single deposit, balance is correct', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    expect(acc.balance).toBe(100);
  });

  test('multiple deposits, balance should be cummulative', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.deposit(75);
    expect(acc.balance).toBe(175);
  });

  test('widthdrawl within limit, blanace is reduced', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.withdrawl(75);
    expect(acc.balance).toBe(25);
  });

  test('widthdrawl just up to limit, balance 0', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    acc.withdrawl(100);
    expect(acc.balance).toBe(0);
  });

  test('widthdrawl more than available balance', () => {
    const acc = new BankAccount();
    acc.deposit(100);
    expect(() => {
      acc.withdrawl(120);
    }).toThrow();
  });
});