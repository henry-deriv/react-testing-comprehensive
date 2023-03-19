const rest = require("./restClient");

function getStockCount() {
  const productsPromise = rest.getAllProducts();
  return productsPromise
    .then((products) =>
      products
        .map((product) => product.stock)
        .reduce((total, next) => total + next, 0.0)
    )
    .catch((_) => 0);
}

function getStockValue() {
  const productsPromise = rest.getAllProducts();
  return productsPromise
    .then((products) =>
      products
        .map((product) => product.price * product.stock)
        .reduce((total, next) => total + next, 0.0)
    )
    .catch((_) => 0);
}

module.exports = {
  getStockCount,
  getStockValue
}