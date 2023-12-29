const pool = require('../../db')

const getOneTasks = async (req, res, next) => {
    const { id } = req.params
    try {
        const result = await pool.query(`SELECT * FROM tasks  WHERE id = $1`, [id])
        console.log(result)

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'Task not found'
            })
        }

        res.json(result.rows[0])
    } catch (error) {
        next(error)
    }
};

module.exports = {
    getOneTasks
}