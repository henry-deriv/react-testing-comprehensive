const axios = require('axios');

class RestClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getAll() {
    return axios.get(this.baseUrl).then(response => response.data);
  }

  get(id) {
    return axios.get(`${this.baseUrl}/${id}`);
  }

  update(id, item) {
    return axios.put(`${this.baseUrl}/${id}`, item);
  }

  delete(id) {
    axios.delete(`${this.baseUrl}/${id}`);
  }
}

module.exports = {
  RestClient,
}