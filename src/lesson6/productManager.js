const rest = require("./restClient");

class ProductManager {
  constructor() {
    this.restClient = new rest.RestClient("https://example.com/api/products");
  }

  getStockCount() {
    const productsPromise = this.restClient.getAll();
    return productsPromise
      .then((products) =>
        products
          .map((product) => product.stock)
          .reduce((total, next) => total + next, 0.0)
      )
      .catch((_) => 0);
  }

  getStockValue() {
    const productsPromise = this.restClient.getAll();
    return productsPromise
      .then((products) =>
        products
          .map((product) => product.price * product.stock)
          .reduce((total, next) => total + next, 0.0)
      )
      .catch((_) => 0);
  }

  removeProducts(...IDs) {
    IDs.forEach(id => this.restClient.delete(id));
  }
}

module.exports = {
  ProductManager,
};
