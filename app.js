const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello, Express App');
});

app.get('/tasks', (req, res) => {});
app.get('/tasks/:id', (req, res) => {});
app.post('/tasks', (req, res) => {});
app.patch('/tasks/:id', (req, res) => {});
app.delete('/tasks/:id', (req, res) => {});

module.exports = app;
