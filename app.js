const express = require('express');
const { TaskDB } = require('./models');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, Express App');
});

app.get('/tasks', (req, res) => {
  const tasks = TaskDB.getTasks();
  res.status(200).send(tasks);
});

app.get('/tasks/:id', (req, res) => {});
app.post('/tasks', (req, res) => {});
app.patch('/tasks/:id', (req, res) => {});
app.delete('/tasks/:id', (req, res) => {});

module.exports = app;
