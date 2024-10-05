const companyService = require("../services/companyService");

const createCompany = async (req, res) => {
  try {
    const companyData = req.body; // Recebe os dados da requisição

    // Validação básica dos dados
    if (!companyData.cnpj || !companyData.nome) {
      return res.status(400).json({ error: "CNPJ e Nome são obrigatórios." }); // Erro de validação
    }

    const company = await companyService.createCompany(companyData); // Chama o serviço para criar a empresa
    return res.status(201).json(company); // Retorna a resposta com o novo registro
  } catch (error) {
    if (error.message === 'Empresa com este CNPJ já existe.') {
        return res.status(400).json({ error: error.message });
      }
    return res.status(500).json({ error: "Erro ao criar a empresa: " + error.message }); // Erro interno do servidor
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await companyService.getAllCompanies();
    res.status(200).json(companies); // Retorna todas as empresas
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar empresas: " + error.message }); // Erro interno do servidor
  }
};

module.exports = { getAllCompanies, createCompany };
