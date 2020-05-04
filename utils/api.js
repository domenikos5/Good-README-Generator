const axios = require('axios');

const BASE_URL = 'https://api.github.com';
const USER_URL = (username) => `${BASE_URL}/users/${username}`;

const api = {
  async getUser(username) {
    try {
      const response = await axios.get(USER_URL(username));

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = api;