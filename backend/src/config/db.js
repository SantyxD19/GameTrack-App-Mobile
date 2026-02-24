const {Pool} = require("pg");
require("dotenv").config();

//Configiuramos la conexion
const pool = new Pool({
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "gametrack",
    password: process.env.DB_PASSWORD || "123456",
    port: process.env.DB_PORT || 5432,
});

pool.connect()
    .then(()=> console.log("Conexion exitosa"))
    .catch((err)=> console.error("Error de conexion", err));

module.exports = pool;