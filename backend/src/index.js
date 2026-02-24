const express = require('express'); /*Nos permite crear el servidor*/
const cors = require('cors'); /*Permite la comunicacion entre entre Front y back*/

const gameRoutes = require("./routes/gameRoutes")

const app = express(); /*Crea el servidor*/

/*Empezamos a configurar*/

app.use(cors()); /*Activa el cors */
app.use(express.json()); /*Permite que el servidor entienda JSON */

app.use("/api",gameRoutes);

/*Rutas*/
app.get('/',(req, res)=>{
    res.send('API de GameTrack funcionando :)');    /*Permite que el servidor redireecione */
});


/*Puerto del server */

const PORT = 3000;

/*Darle vida al server*/

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
