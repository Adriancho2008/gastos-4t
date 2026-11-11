const database = require("../db/conexiondb")


const obtenerDatos = async (params) =>{
    const resultado = await database.query("SELECT * FROM categoria")
}




obtenerDatos()