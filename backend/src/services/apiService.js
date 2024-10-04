const axios = require("axios");

class ApiService {
  async fetchCnpj(cnpj) {
    try {
      const response = await axios.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`);
      return response.data;
    } catch (error) {
      throw new Error("Erro ao buscar dados do CNPJ: " + error.message);
    }
  }
}

module.exports = new ApiService();
