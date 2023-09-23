// server/controllers/taskController.js
const Task = require('../models/Task');

// Controller function to list all tasks
exports.listTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Controller function to add a task
exports.addTask = async (req, res) => {
  const { text } = req.body;
  try {
    const newTask = new Task({ text });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
