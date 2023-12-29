const { Router } = require('express');
const { deleteTasks } = require('../controllers/delete.controller/deleteTasksController')
const { getAllTasks } = require('../controllers/get.controllers/getAllTasksController')
const { getOneTasks } = require('../controllers/get.controllers/getByIdController')
const { postOneTasks } = require('../controllers/post.controller/postTasksController')
const { updateTasks } = require('../controllers/put.controller/updateTasksController')

const router = Router();

router.get('/tasks', getAllTasks)
router.get('/tasks/:id', getOneTasks)

router.post('/tasks', postOneTasks)

router.put('/tasks/:id', updateTasks)

router.delete('/tasks/:id', deleteTasks)


module.exports = router