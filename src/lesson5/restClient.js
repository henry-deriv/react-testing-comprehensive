const axios = require("axios");

const baseUrl = "https://example.com/api/products";

const getAllProducts = () => {
  return axios.get(baseUrl).then((response) => response.data);
}

const getProductById = (id) => {
  return axios.get(`${baseUrl}/${id}`).then((response) => response.data);
}

module.exports = {
  getAllProducts,
  getProductById
}