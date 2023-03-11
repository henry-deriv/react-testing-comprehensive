describe('Matchers for equality', () => {

  test('toBe() compares using ===', () => {
    const a = 42;
    const b = 42;

    expect(a).toBe(b);
    expect(a).not.toBe(21);
  });

  test('toBe() compares object identity', () => {
    const country1 = {
      name: "Wales",
      population: 123456,
    };

    const country2 = {
      name: "Wales",
      population: 123456,
    };

    expect(country1).toEqual(country2);
    expect(country1).not.toBe(country2);
  });

  test('toMatch() matches a string against a Regex', () => {
    const message = "Oslo is in Norway";

    expect(message).toMatch('Norway');
    expect(message).toMatch(/norw../i);
    expect(message).not.toMatch(/norw../); 
  });

  test('toMatchObject() matches object properties', () => {
    const carOnSale = {
      make: "Mazda",
      model: "CX30",
      fuelType: "hybrid",
      colour: "red",
    }

    const carDesired = {
      make: "Mazda",
      fuelType: "hybrid",
    }

    expect(carOnSale).toMatchObject(carDesired);
  });
});

describe('Matchers for range', () => {

  test('toBeLessThan()', () => {
    const a = 1.3;
    const b = 3.5;
    expect(a).toBeLessThan(b);
  });

  test('toBeLessThanOrEqual()', () => {
    const a = 1.3;
    const b = 1.3;
    expect(a).toBeLessThanOrEqual(b);
  });

  test('toBeGreaterThan()', () => {
    const a = 1.5;
    const b = 1.3;
    expect(a).toBeGreaterThan(b);
  });

  test('toBeGreaterThanOrEqual()', () => {
    const a = 1.5;
    const b = 1.5;
    expect(a).toBeGreaterThanOrEqual(b);
  });

  test('toBeCloseTo() tests to mathematical proximity', () => {
    const a = 10.12345;
    const b = 10.12348;
    expect(a).toBeCloseTo(b);
    expect(a).toBeCloseTo(b, 4);
    expect(a).not.toBeCloseTo(b,5);
  });
});

describe('Matchers for null, undefined, or NaN', () => {
  test('toBeNull() tests for null', () => {
    const a = null;
    const b = 42;
    expect(a).toBeNull();
    expect(b).not.toBeNull();
  });

  test('toBeDefined() tests if a property is defined', () => {
    const person = {
      name: "Andy",
      age: 56
    }
    expect(person.name).toBeDefined();
  });

  test('toBeUndefined() test if a property is undefined', () => {
    const person = {
      name: 'Andy',
      age: 56
    }
    expect(person.companyJet).toBeUndefined();
  });

  test('toBeNan() tests for NaN', () => {
    const a = Math.sqrt(-25);
    const b = Math.sqrt(25);
    expect(a).toBeNaN();
    expect(b).not.toBeNaN();
  });
});

describe('Matchers for truth for falsehood', () => {
  test('toBeTruthy() tests for truthy values', () => {
    const a = true;
    const b = 42;
    const c = 42n;
    const d = 3.14;
    const e = "hello";
    const f = {};
    const g = [];

    expect(a).toBeTruthy();
    expect(b).toBeTruthy();
    expect(c).toBeTruthy();
    expect(d).toBeTruthy();
    expect(e).toBeTruthy();
    expect(f).toBeTruthy();
    expect(g).toBeTruthy();
  });

  test('toBeFalsy()', () => {
    const a = false;
    const b = '';
    const c = null;
    const d = undefined;
    const e = 0;
    const f = 0.0;
    const g = NaN;

    expect(a).toBeFalsy();
    expect(b).toBeFalsy();
    expect(c).toBeFalsy();
    expect(d).toBeFalsy();
    expect(e).toBeFalsy();
    expect(f).toBeFalsy();
    expect(g).toBeFalsy();
  });
});

describe('Matchers for object properties', () => {
  test('has a length property', () => {
    const a = [1, 2, 3];
    const b = "abcd";

    expect(a).toHaveLength(3);
    expect(b).toHaveLength(4);
  });

  test('tests for an object property using dot syntax', () => {
    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6"},
        pay: { salary: 10000, bonus: 500 }
      }
    }
    expect(emp).toHaveProperty("benefits.car.make");
    expect(emp).toHaveProperty("benefits.car.model");
    expect(emp).not.toHaveProperty('benefits.jet');
  });

  test('tests for an object property using array syntax', () => {
    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6"},
        pay: { salary: 10000, bonus: 500 }
      },
    }
    expect(emp).toHaveProperty(["benefits", "car", "make"]);
  });

  test('has a property', () => {
    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6"},
        pay: { salary: 10000, bonus: 500 }
      },
      skills: ["JS", "TS", "C#"],
    }
    
    expect(emp).toHaveProperty(["skills", 0]);
    expect(emp).toHaveProperty(["skills", 1]);
  });

  test('tests for an object property value', () => {
    const emp = {
      name: "Andy",
      benefits: {
        car: { make: "Mazda", model: "6"},
        pay: { salary: 10000, bonus: 500 }
      },
      skills: ["JS", "TS", "C#"],
    }

    expect(emp).toHaveProperty("benefits.car.make", "Mazda");
    expect(emp).toHaveProperty(["benefits", "car", "model"], "6");
    expect(emp).toHaveProperty(["skills", 0], "JS");
  });
});

describe('Matchers for collections', () => {
  test('tests for an item in Array', () => {
    const p1 = {name: "em", age: 24};
    const p2 = {name: "tom", age: 24};
    const p3 = {name: "Jayne", age: 56};
    const p4 = {name: "Andy", age: 56};

    const people = [p1, p2, p3];
    expect(people).toContain(p1);
    expect(people).not.toContain(p4);
    expect(people).not.toContain({name: "Jayne", age: 56});
  });

  test('tests for value in an Array', () => {
    const p1 = {name: "em", age: 24};
    const p2 = {name: "tom", age: 24};
    const p3 = {name: "Jayne", age: 56};
    const people = [p1, p2, p3];

    expect(people).toContainEqual({name: "Jayne", age:56});
  });

  test('tests for a key in a Map', () => {
  const codes = new Map([
    ["SA", "+27"],
    ["NO", "+47"],
    ["SG", "+65"]
  ]);
  
  expect(codes.has("SG")).toBeTruthy();
  expect(codes.has("UK")).toBeFalsy();
  });

  test('tests the value of an item in a Map', () => {
    const codes = new Map([
      ["SA", "+27"],
      ["NO", "+47"],
      ["SG", "+65"]
    ]);

    expect(codes.get("SG")).toBe("+65");
    expect(codes.get("UK")).toBeUndefined();
  });
  
  test('tests for an item in a Set', () => {
    const countries = new Set()
      .add("SA")
      .add("NO")
      .add("SG");

      expect(countries.has("SG")).toBeTruthy();
      expect(countries.has("UK")).toBeFalsy();
  });
});

describe('Matchers for errors', () => {
  test('toThrow() tests if a function throws an error', () => {
    const badFunc = () => zzz + 1;
    const goodFunc = () => 2 + 2;

    expect(badFunc).toThrow();
    expect(goodFunc).not.toThrow();
  })
});

expect.extend( {
  toBeExamMark(n) {
    if(typeof n !== "number") {
      throw new Error("Expected value to be a number");
    }
    if(n >= 0 && n <= 100) {
      return {
        pass: true,
        message: () => `Expected $(n) not to be a valid exam mark`
      };
    } else {
      return {
        pass: false,
        message: () => `Expected ${n} to be a valid exam mark`
      };
    }
  },

  toBeInRange(n, min, max) {
    if (typeof n !== 'number'){
      throw new Error('Expected value to be a number');
    }
    if (n >= min && n < max) {
      return {
        pass: true,
        message: () => `Expected ${n} not to be in range [${min}, ${max}]`
      };
    } else {
      return {
        pass: false,
        message: () => `Expected $n to be in range [${min}, ${max}]`
      };
    }
  }
});

describe('Test custom matcher', () => {
  test('tests if exam mark is valid', () => {
    const mark = 70;
    expect(mark).toBeExamMark();
  });

  test('tests if exam mark is not valid', () => {
    const mark = -10;
    expect(mark).not.toBeExamMark();
  })

  test('tests if example mark is NaN', () => {
    const mark = 10;
    expect(mark).toBeExamMark();
  });
});

describe('Test custom range matcher', () => {
  test('Pass if expected good/bad values', () => {
    expect(12).toBeInRange(10, 20);
    expect(5).not.toBeInRange(10, 20);
    expect(18).toBeInRange(10, 20);
  });

  test('Fail if we get unexpected good/bad values', () => {
    expect(12).toBeInRange(10, 20);
    expect(9).not.toBeInRange(10, 20);
    expect(19).toBeInRange(10, 20);
  })
});