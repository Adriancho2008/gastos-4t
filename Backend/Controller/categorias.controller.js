const CategoriasModel = require('../Model/Categorias.model');

const obtenerCategorias = async (req, res) => {
  try {
    const categorias = await CategoriasModel.obtenerCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las categorías' });
  }
};

module.exports = {
  obtenerCategorias
};