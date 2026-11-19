const database = require("../db/conexiondb")

class GastosModel{

    //CRUD
    //Read
    static async obtenerGastos(){
        const [rows] = await database.query('SELECT * FROM movimientos');
return rows;
    }
}

module.exports = GastosModel