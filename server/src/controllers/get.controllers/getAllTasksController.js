const pool = require('../../db')

const getAllTasks = async (req, res, next) => {
    try {

        const allTasks = await pool.query('SELECT * FROM tasks')
        res.json(allTasks.rows)

    } catch (error) {
        next(error)
    }
};

module.exports = {
    getAllTasks
}