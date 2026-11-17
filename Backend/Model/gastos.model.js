const database = require("../db/conexiondb")

class GastosModel{

    //CRUD
    //Read
    static async obtenerGastos(){
        const resultado = await database.query("SELECT * FROM gastos")
       //[datos][metadatos]
        return resultado
    }
}

module.exports = GastosModel