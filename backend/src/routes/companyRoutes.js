const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

// Rota para criar uma nova empresa
router.post("/register", companyController.createCompany);
router.get("/", companyController.getAllCompanies);

module.exports = router;
