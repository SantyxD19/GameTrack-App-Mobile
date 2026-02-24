const pool = require("../config/db");

// Obtener todos los juegos desde la base de datos
const getGames = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM games ORDER BY id ASC");
        res.json(result.rows);
    } catch (error) {
        console.error("Error obteniendo juegos:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

// Crear un nuevo juego
const createGame = async (req, res) => {
    try {
        const { name, platform, status } = req.body;

        const result = await pool.query(
            "INSERT INTO games (name, platform, status) VALUES ($1, $2, $3) RETURNING *",
            [name, platform, status]
        );

        res.status(201).json(result.rows[0]);

    } catch (error) {
        console.error("Error creando juego:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

// Eliminar juego por ID
const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM games WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Juego no encontrado" });
        }

        res.json({ message: "Juego eliminado correctamente", game: result.rows[0] });

    } catch (error) {
        console.error("Error eliminando juego:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};

//Actuaslziar juego
const updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, platform, status, description } = req.body;

        const result = await pool.query(
            "UPDATE games SET name = $1, platform = $2, status = $3, description = $4 WHERE id = $5 RETURNING *",
            [name, platform, status, description, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Juego no encontrado" });
        }

        res.json({
            message: "Juego actualizado correctamente",
            game: result.rows[0]
        });

    } catch (error) {
        console.error("Error actualizando juego:", error);
        res.status(500).json({ message: "Error del servidor" });
    }
};



module.exports = {
    getGames,
    createGame,
    deleteGame,
    updateGame
};