const express = require("express");
const router = express.Router();
const gastosController = require("../Controller/gastos.controller")

router.get("/gastos" , controlador.obtenerGastos)

module.exports = router


