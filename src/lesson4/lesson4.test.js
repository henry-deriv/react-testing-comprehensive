const op = require("./lesson4");

describe("test slow operations", () => {
  it("test slow operation, correct technique", (done) => {
    function testResult(result) {
      expect(result).toBe(42);
      done();
    }
    op.slowOperation(testResult);
  });

  test("tests error", (done) => {
    function testError(error) {
      expect(error).toBe("Cannot divide by 0");
      done();
    }
    op.slowOperationError(10, 0, null, testError);
  });
});

describe("test doTask Promise using then/catch", () => {
  test("task resolves if value < 0,5", () => {
    return op.doTask(1, 0.3).then((data) => {
      expect(data).toBe("Task 1 resolved");
    });
  });

  test("task rejected if value > 0.5", () => {
    expect.assertions(1);
    return op.doTask(1, 0.6).catch((err) => {
      expect(err).toBe("Task 1 rejected");
    });
  });
});

describe("test doTask Promise using resolves/rejects matchers", () => {
  test("task resolves if value < 0,5", () => {
    return expect(op.doTask(1, 0.3)).resolves.toBe("Task 1 resolved");
  });

  test("task rejected if value > 0.5", () => {
    return expect(op.doTask(1, 0.6)).rejects.toBe("Task 1 rejected");
  });
});

describe("test async/await doTask", () => {
  test('task resolves if values < 0.5', async () => {
    const data = await op.doTask(1, 0.2);
    expect(data).toBe('Task 1 resolved');
  });

  test('Task rejects if value >= 0,5', async () => {
    expect.assertions(1);
    try {
      await op.doTask(1, 0.51);
    } catch (err) {
      expect(err).toBe('Task 1 rejected');
    }
  });
});

describe("test doTask async/await using resolves/rejects matchers", () => {
  test("task resolves if value < 0,5", async () => {
   await expect(op.doTask(1, 0.3)).resolves.toBe("Task 1 resolved");
  });

  test("task rejected if value > 0.5", async () => {
    await expect(op.doTask(1, 0.6)).rejects.toBe("Task 1 rejected");
  });
});

describe('test rxjs data stream', () => {
  test('tests Observable that emits single value', done => {
    const observable = op.emitSingleValue();

    observable.subscribe({
      next: data => {
        expect(data).toBe(42);
        done();
      }
    });
  });

  test('test Observable that emits multiple values', done => {
    const observable = op.emitStream1();
    let expected = 100;

    observable.subscribe({
      next: data => {
        expect(data).toBe(expected);
        expected += 100;
      },
      complete: () => done()
    });
  });


  test('tests Observable that emits random values', done => {
    const observable = op.emitStream2(5);
    
    observable.subscribe({
      next: data => {
        expect(data >= 0 && data < 100).toBeTruthy();
      },
      complete: () => done()
    });
  });

  test('tests Observable that emits error', done => {
    const observable = op.emitStream3(0);

    observable.subscribe({
      error: err => {
        expect(err.message).toBe('Bad Length');
        done();
      },
    });
  });

});