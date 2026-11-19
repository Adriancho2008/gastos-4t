const express = require("express");
const app = express();
const puerto = 3000;

app.use(express.json());

const rutas = require("./Backend/routes/router");

// Definir los endpoints base
app.use("/api", rutas);

app.listen(puerto, () => {
    console.log(`corriendo en el ${puerto}`);
});