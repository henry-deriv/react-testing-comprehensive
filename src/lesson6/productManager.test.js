const rest = require('./restClient');
const pm = require('./productManager');

// jest.mock('./restClientClasss');
jest.mock('./restClient');

afterEach(() => {
  jest.clearAllMocks();
});

describe('automatic mock', () => {
  test('call the restClient Constructor directly', () => {
    const restClient = new rest.RestClient();
    expect(rest.RestClient).toHaveBeenCalledTimes(1);
    expect(rest.RestClient.mock.instances[0]).not.toBeUndefined();
  });
  
  test('call the restClient Constructor indirectly', () => {
    const productManager  = new pm.ProductManager();
    expect(rest.RestClient).toHaveBeenCalledTimes(1);
    expect(rest.RestClient.mock.instances[0]).not.toBeUndefined();
  });
  
  test('call Restclient methods', () => {
    const productManager = new pm.ProductManager();
    expect(rest.RestClient).toHaveBeenCalledTimes(1);
  
    productManager.removeProducts(101, 102, 103);
  
    const restClientInstance = rest.RestClient.mock.instances[0];
    const deleteMethod = restClientInstance.delete;
    expect(deleteMethod.mock.calls.length).toBe(3);
    expect(deleteMethod.mock.calls[0][0]).toBe(101);
    expect(deleteMethod.mock.calls[1][0]).toBe(102);
    expect(deleteMethod.mock.calls[2][0]).toBe(103);
  });
});






