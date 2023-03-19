const axios = require('axios');

class RestClient {
  
  static products = [
    {id: 101, description: 'Skis', price: 500, stock: 100},
    {id: 102, description: 'Boots', price: 200, stock: 5},
    {id: 103, description: 'Goggles', price: 100, stock: 3}
  ];

  constructor(baseUrl) {
    console.log(`Manual mock: RestClient(${baseUrl}) called`);
  }

  getAll() {
    return new Promise((resolve, reject) => {
      console.log(`Manual mock: RestClient getAll() resolving`);
      resolve(RestClient.products);
    });
  }

  get(id) {
    console.log(`Manual mock: RestClient get(${id}) called`);
    return new Promise((resolve, reject) => {
      const product = RestClient.products.find(elem => elem.id === id);

      if(product) {
        resolve(product);
      } else {
        reject(new Error("Invalid id"));
      }
    });
  }

  update(id, item) {
    console.log(`Manual mock: RestClient update ${id}, ${item} called`);
  }

  delete(id) {
    console.log(`Manual mock: RestClient delete ${id} called`);
  }
}

module.exports = {
  RestClient,
}