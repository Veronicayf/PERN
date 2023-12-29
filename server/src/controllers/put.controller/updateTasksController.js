const pool = require('../../db')

const updateTasks = async (req, res, next) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const result = await pool.query('UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *', [title, description, id]);

    if (result.rows.length === 0) {
        return res.status(404).json({
            message: 'Tasks not found',
        });
    }

    return res.json(result.rows[0])

};

module.exports = {
    updateTasks
}