const mysql = require("mysql2")

 
const pool = mysql.createPool({
host: 'localhost',
user: 'root',
password: '0987',
port: '3306',
database: 'administracion_gastos'
})


module.exports = pool.promise()




