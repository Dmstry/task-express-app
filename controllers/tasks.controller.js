const { TaskDB } = require('./../models');

module.exports.getTasks = (req, res) => {
  const tasks = TaskDB.getTasks();
  res.status(200).send(tasks);
};

module.exports.getTaskById = (req, res) => {
  const { id } = req.params;
  const foundTask = TaskDB.getTaskById(id);
  if (foundTask) {
    return res.status(200).send(foundTask);
  }

  res.status(404).send('Task Not Found');
};

module.exports.addTask = (req, res) => {
  const { text, deadline } = req.body;

  const addedTask = TaskDB.addTask(text, deadline);
  res.status(201).send(addedTask);
};

module.exports.updateTaskById = (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  const updatedTask = TaskDB.updateTask(id, body);
  if (updatedTask) {
    return res.status(200).send(updatedTask);
  }
  res.status(404).send('Task Not Found');
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  const deletedTask = TaskDB.deleteTask(id);
  if (deletedTask) {
    return res.status(204).send();
  }
  res.status(404).send('Task Not Found');
};
