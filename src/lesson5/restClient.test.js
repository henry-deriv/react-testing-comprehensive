const axios = require("axios");
const rest = require("./restClient");
const products = [
  { description: "Skis", price: 500, stock: 10 },
  { description: "Gloves", price: 10, stock: 100 },
  { description: "Pole", price: 50, stock: 120 },
];

jest.mock("axios");

describe("Test Rest calls", () => {
  test("get all products", async () => {
    const response = { data: products };
    await axios.get.mockResolvedValueOnce(response);

    let promise = rest.getAllProducts().then((data) => {
      expect(data).toEqual(products);
    });
    expect(axios.get).toHaveBeenCalledWith("https://example.com/api/products");
    return promise;
  });

  test("get one product", async () => {
    const response = { data: products[1] };
    await axios.get.mockResolvedValueOnce(response);

    let promise = rest
      .getProductById(1)
      .then((data) => expect(data).toEqual(products[1]));

    expect(axios.get).toHaveBeenCalledWith(
      "https://example.com/api/products/1"
    );
    return promise;
  });
});
