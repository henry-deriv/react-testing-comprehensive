const funcs = require('./lesson5');

describe('using mock functions', () => { 
  test('using simple mock functions', () => {
    const mock1 = jest.fn();
    const result = mock1();
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(result).toBeUndefined();
  });

  test('using a mock function that takes parameters', () => {
    const mock2 = jest.fn();
    const result = mock2(10, 20 , 30);
    expect(mock2).toHaveBeenCalledTimes(1);
    expect(mock2).toHaveBeenCalledWith(10, 20, 30);
    expect(result).toBeUndefined();
  });

  test('using a mock function that returns a value', () => {
    const mock1 = jest.fn(() => 42);
    const result = mock1();
    expect(mock1).toHaveBeenCalledTimes(1);
    expect(result).toBe(42);
  });
  
  test('testing mock add test function' , () => {
    const mockAdd = jest.fn(() => 30);
    let result = mockAdd(10, 20);

    expect(mockAdd.mock.calls.length).toBe(1);
    expect(mockAdd.mock.calls[0][0]).toBe(10);
    expect(mockAdd.mock.calls[0][1]).toBe(20);
    expect(mockAdd.mock.results[0].value).toBe(30);
  });

  test('testing mock processArr function', () => {
    const mockOp = jest.fn(i => i * i);
    funcs.processArr([10, 20, 30], mockOp);

    expect(mockOp.mock.calls.length).toBe(3);

    expect(mockOp.mock.calls[0][0]).toBe(10);
    expect(mockOp.mock.results[0].value).toBe(100);

    expect(mockOp.mock.calls[1][0]).toBe(20);
    expect(mockOp.mock.results[1].value).toBe(400);
    
    expect(mockOp.mock.calls[2][0]).toBe(30);
    expect(mockOp.mock.results[2].value).toBe(900);
  });
});

// describe('api test', () => { 
//   test('local storage not supported', () => {
//     const isLocalStorageSupported = jest.fn(() => true);
//     const getNumber = jest.fn(() => {});
//     const saveNumber = jest.fn(() => {});

//     isLocalStorageSupported();
    
//     funcs.incrementLikes();

//     expect(isLocalStorageSupported).toHaveBeenCalled();
//     expect(getNumber).not.toHaveBeenCalled();
//     expect(saveNumber).not.toHaveBeenCalled();
//   });

//   test('likes not defined in localstorage', () => {
//     const isLocalStorageSupported = jest.fn(() => false);
//     funcs.getNumber = jest.fn(() => 0);
//     const saveNumber = jest.fn(() => 1);

//     isLocalStorageSupported();
    
//     funcs.incrementLikes();

//     expect(isLocalStorageSupported).toHaveBeenCalled();
//     expect(funcs.getNumber).toHaveBeenCalledWith('likes', 0);
//     expect(saveNumber).toHaveBeenCalled('likes', 1);
//   });
// });