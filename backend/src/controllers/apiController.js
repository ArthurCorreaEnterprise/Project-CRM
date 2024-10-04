const apiService = require("../services/apiService");

class ApiController {
  async getCnpj(req, res) {
    const { cnpj } = req.params;

    try {
      const data = await apiService.fetchCnpj(cnpj);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ApiController();
