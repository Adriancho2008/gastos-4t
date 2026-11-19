const express = require("express");
const router = express.Router();
const gastosController = require("../Controller/gastos.Controller");
const categoriasController = require("../Controller/categorias.controller");

router.get("/gastos", gastosController.obtenerGastos);
router.get("/categorias", categoriasController.obtenerCategorias);

module.exports = router;