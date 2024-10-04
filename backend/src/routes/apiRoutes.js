const express = require("express");
const apiController = require("../controllers/apiController");
const router = express.Router();

// Define a rota para buscar CNPJ
router.get("/cnpj/:cnpj", apiController.getCnpj);

module.exports = router;
