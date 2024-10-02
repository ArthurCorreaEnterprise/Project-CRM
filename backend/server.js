const express = require('express');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configurando o Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

// Testando a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro ao conectar no banco de dados:', err);
  });

// Middleware para interpretar JSON
app.use(express.json());

// Rota simples de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo ao Project-CRM Backend!');
});

// Inicializando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
