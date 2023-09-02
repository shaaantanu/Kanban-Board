const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Use middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// In-memory task data (replace with a database)
const tasks = [];

// Define API routes

// Get all tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Create a new task
app.post('/api/tasks', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
    }

    const newTask = { id: tasks.length + 1, title, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Update a task by ID
app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description } = req.body;

    const taskToUpdate = tasks.find((task) => task.id === taskId);
    if (!taskToUpdate) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    if (title) {
        taskToUpdate.title = title;
    }
    if (description) {
        taskToUpdate.description = description;
    }

    res.json(taskToUpdate);
});

// Delete a task by ID
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);

    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found.' });
    }

    tasks.splice(taskIndex, 1);
    res.sendStatus(204);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
