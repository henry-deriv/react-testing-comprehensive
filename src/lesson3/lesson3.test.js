const { BankAccount, BankError, add, getGrade, isValid} = require('./lesson3');
const {add: addTS, subtract, multiply, divide } = require('./lesson3-typescript');


describe('test BankAccount class', () => { 
  let acc1;

  beforeAll(() => {
    console.log('One-off setup tasks...');
  });
  
  afterAll(() => {
    console.log('One-off teardown tasks...');
  });
  
  beforeEach(() => {
    console.log('set fresh bankAccount object');
    acc1 = new BankAccount('Tom');
  })
  
  afterEach(() => {
    console.log('tear down bankAccount object');
  })
  
  test('accounts have 0 balance initially', () => {
    expect(acc1.balance).toBe(0);
  });
  
  test('deposits increase balance', () => {
    acc1.deposit(100);
    expect(acc1.balance).toBe(100);
  });
  
  test('withdraw decrease balance', () => {
    acc1.withdraw(25);
    expect(acc1.balance).toBe(-25);
  });
});

describe('testing add function', () => {
  test.each([
    [10, 20, 30],
    [-10, -20, -30],
    [10, -20, -10]
  ]) (`add %d and %d to get %d`, (n1, n2, expected) => {
    const actual = add(n1, n2);
    expect(actual).toBe(expected);
  });
});

describe('Test the withdraw method', () => {
  let acc2;

  beforeEach(() => {
    acc2 = new BankAccount('Emily');
    acc2.deposit(2000);
  })

  test('small withdraw works ok', () => {
    acc2.withdraw(200);
    expect(acc2.balance).toBe(1800);
  });

  test('big withdraw causes some error', () => {
    expect(() => {
      acc2.withdraw(3001);
    }).toThrow();
  });

  test('big withdraw causes BankError', () => {
    expect(() => {
      acc2.withdraw(3001);
    }).toThrow(BankError);
  });
  
  test('big withdraw causes specific error message', () => {
    expect(() => {
      acc2.withdraw(3001);
    }).toThrow('Insufficient funds');
  });

  test('big withdraw causes specific BankError', () => {
    try{
      acc2.withdraw(3001);
    } catch(err) {
      expect(err).toBeInstanceOf(BankError);
      expect(err.message).toBe('Insufficient funds');
      expect(err.amount).toBe(3001);
    }
  });
});

describe('Test typescript tests', () => {
  let a;
  let b;

  beforeEach(() => {
    a = 10;
    b = 20;
  });

  test('tests add function', () => {
    expect(typeof a && typeof b).toBe('number');
    expect(addTS(a,b)).toBe(30);
  });

  test('tests subtract function', () => {
    expect(subtract(a,b)).toBe(-10);
  });

  test('tests multiply function', () => {
    expect(multiply(a,b)).toBe(200);
  });

  test('tests divide function', () => {
    expect(divide(a,b)).toBe(0.5);
  });
})

describe('getGrade returns the correct grade', () => {
  test('over 70 is grade A', () => {
    expect(getGrade(75)).toBe('A');
  });

  test('exactly 70 is grade A', () => {
    expect(getGrade(70)).toBe('A');
  });

  test('over 60 is grade B', () => {
    expect(getGrade(61)).toBe('B');
  });

  test('exactly 60 is grade B', () => {
    expect(getGrade(60)).toBe('B');
  });

  test('over 50 is grade C', () => {
    expect(getGrade(51)).toBe('C');
  });

  test('exactly 50 is grade C', () => {
    expect(getGrade(50)).toBe('C');
  });

  test('under 50 to be fail', () => {
    expect(getGrade(49)).toBe('Fail');
  });

  test('over 100 to return Too high', () => {
    expect(getGrade(101)).toBe('Too high');
  });

  test('under 0 to return Too low', () => {
    expect(getGrade(-1)).toBe('Too low');
  });
});