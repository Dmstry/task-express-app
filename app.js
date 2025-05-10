const express = require('express');
const { tasksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, Express App');
});

app.get('/tasks', tasksController.getTasks);

app.get('/tasks/:id', tasksController.getTaskById);

app.post('/tasks', tasksController.addTask);

app.patch('/tasks/:id', tasksController.updateTaskById);

app.delete('/tasks/:id', tasksController.deleteTask);

module.exports = app;
