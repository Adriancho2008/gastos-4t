const database = require('../db/conexiondb');

const CategoriasModel = {
  async obtenerCategorias() {
    const [rows] = await database.query(
      'SELECT id_categoria, nombre_categoria FROM categorias'
    );
    return rows;
  }
};

module.exports = CategoriasModel;