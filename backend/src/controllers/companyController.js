const companyService = require("../services/companyService");

exports.createCompany = async (req, res) => {
  try {
    const companyData = req.body; // Recebe os dados da requisição
    const company = await companyService.createCompany(companyData); // Chama o serviço para criar a empresa
    return res.status(201).json(company); // Retorna a resposta com o novo registro
  } catch (error) {
    return res.status(500).json({ error: error.message }); // Erro interno do servidor
  }
};
