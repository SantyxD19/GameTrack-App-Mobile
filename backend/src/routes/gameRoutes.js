const express = require("express");
//Creamos un router - un mini servidor apra organzaire rutas
const router = express.Router();

//Importamos el controller

const { getGames, createGame, deleteGame, updateGame } = require("../controllers/gameController");

/*Definimos la ruta GET /games */

router.get("/games", getGames);
router.post("/games", createGame);
router.delete("/games/:id", deleteGame);
router.put("/games/:id",updateGame)

//Exportamos el router

module.exports = router;