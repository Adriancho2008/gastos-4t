const database = require("../db/conexiondb")


console.log(database.query("SELECT * FROM gastos", (err, result) => {