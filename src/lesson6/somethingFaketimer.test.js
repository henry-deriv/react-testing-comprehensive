const ops = require('./something');

describe('fake timers', () => {
  afterEach(() => {
    jest.useRealTimers();
  });

  // test('using fake timers', () => {
  //   jest.useFakeTimers();
  //   const spy = jest.spyOn(global, 'setTimeout');

  //   ops.countdown(() => {}, 4);

  //   expect(spy).toHaveBeenCalledTimes(1);
  //   expect(spy).toHaveBeenCalledWith(expect.any(Function), 4000);

  //   spy.mockRestore();
  // });

  // it('using Real timers', done => {
  //   function callback(msg) {
  //     expect(msg).toBe('2 seconds countdown complete');
  //     done();
  //   }
  //   ops.countdown(callback, 2);
  // });

  test('running all timers to completion', () => {
    jest.useFakeTimers();

    const dummyCallback = jest.fn();

    ops.countdown(dummyCallback, 4);

    expect(dummyCallback).not.toHaveBeenCalled();
    
    jest.runAllTimers();
    expect(dummyCallback).toBeCalled();
    expect(dummyCallback).toHaveBeenCalledTimes(1);
  })
});