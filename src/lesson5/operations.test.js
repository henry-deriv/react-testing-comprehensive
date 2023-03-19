const ops = require('./operations');
const rest = require('./restClient');

const products = [
  {description: 'Skis', price: 500, stock: 10},
  {description: 'Gloves', price: 10, stock: 100},
  {description: 'Pole', price: 50, stock: 120},
];

jest.mock('./restClient');
// rest.getAllProducts.mockResolvedValue(products);

describe('mocking promises', () => {
  test('mock a promise that resolves', async () => {
    rest.getAllProducts.mockImplementation(() => Promise.resolve(products));
    const result = ops.getStockCount();
    expect(rest.getAllProducts).toHaveBeenCalled();
    await expect(result).resolves.toBe(230);
  });

  test('mock another promise that resolves', async () => {
    rest.getAllProducts.mockImplementation(() => Promise.resolve(products));
    const result = ops.getStockValue();
    expect(rest.getAllProducts).toHaveBeenCalled();
    await expect(result).resolves.toBe(12000);
  });

  test('mock a promise that rejects', async () => {
    rest.getAllProducts.mockRejectedValue(new Error('error'));
    const result = ops.getStockValue();
    expect(rest.getAllProducts).toHaveBeenCalled();
    await expect(result).resolves.toBe(0);
  })
});