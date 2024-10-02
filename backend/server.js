// server.js
const express = require('express');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

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
