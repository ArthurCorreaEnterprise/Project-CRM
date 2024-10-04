const express = require('express');
const userRoutes = require('./userRoutes');
const companyRoutes = require('./companyRoutes');
const apiRoutes = require('./apiRoutes');

const router = express.Router();

router.use('/users', userRoutes);
router.use('/companies', companyRoutes);
router.use('/', apiRoutes);

module.exports = router;
