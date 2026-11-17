const modelo = require ("../Model/gastos.model")

class GastosController{

    static async obtenerGastos(req,res){
        const datos = await modelo.obtenerGastos()
        return res.json(datos)
    }   
}