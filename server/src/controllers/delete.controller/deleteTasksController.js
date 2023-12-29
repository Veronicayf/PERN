const pool = require('../../db')

const deleteTasks = async (req, res, next) => {
    const { id } = req.params
    try {

        const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id])

        if (result.rowCount === 0) {
            return res.status(404).json({
                message: 'Tasks not found'
            })
        }
        res.json('Successfully removed')
    } catch (error) {
        next(error)
    }// return (res.sendStatus(204)) //server no responde
};


module.exports = {
    deleteTasks
}