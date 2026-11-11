conts mysql = require("mysql2")

 
const pool = mysql.createPool({
host: 'localhost'
user: 'root'
password: ''
port: '3306'
database: 'gestion_almacen_tech'
})


module.esports = pool

MVC


