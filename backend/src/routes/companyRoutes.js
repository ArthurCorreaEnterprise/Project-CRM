const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

// Rota para criar uma nova empresa
router.post("/", companyController.createCompany);

module.exports = router;
