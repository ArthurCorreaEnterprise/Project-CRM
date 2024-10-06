const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

// Criar nova assinatura
router.post('/subscription', paymentController.createSubscription);

module.exports = router;
