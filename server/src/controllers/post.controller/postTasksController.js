const pool = require('../../db')

const postOneTasks = async (req, res, next) => {
    const { title, description } = req.body

    try {
        const result = await pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *', [
            title,
            description,
        ]);

        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
};

module.exports = {
    postOneTasks
}