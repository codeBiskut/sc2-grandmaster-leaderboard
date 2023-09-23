// server/routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define routes for tasks
router.get('/tasks', taskController.listTasks);
router.post('/tasks', taskController.addTask);

module.exports = router;
