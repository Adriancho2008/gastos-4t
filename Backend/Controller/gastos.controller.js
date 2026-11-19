const modelo = require ("../Model/gastos.model")

class gastosController{

    static async obtenerGastos(req,res){
        const datos = await modelo.obtenerGastos()
        return res.json(datos)
    }   
}
module.exports = gastosController