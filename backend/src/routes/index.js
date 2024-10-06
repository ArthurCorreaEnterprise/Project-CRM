const express = require('express');
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes');
const apiRoutes = require('./apiRoutes');
const paymentRoutes = require('./paymentRoute');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/companies', companyRoutes);
router.use('/', apiRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;
