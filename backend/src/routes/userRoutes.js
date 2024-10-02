// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Rota para criar um usuário
router.post('/users/register', userController.createUser);

// Rota para autenticação
router.post('/users/login', userController.authenticateUser);

// Rota para listar usuários
router.get('/users', userController.getUsers);

// Rota para deletar um usuário
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
