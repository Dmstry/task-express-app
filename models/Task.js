const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '0',
    text: 'Develop the server-side',
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    deadline: '2025-05-15',
    isDone: false,
  },
  {
    id: '1',
    text: 'Set up routing in Express',
    createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    deadline: '2025-05-20',
    isDone: true,
  },
];

class TasksDB {
  constructor(arr) {
    this.tasks = [...arr];
  }

  addTask(text, deadline) {
    const newTask = {
      id: uuidv4(),
      text,
      createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      deadline,
      isDone: false,
    };

    this.tasks.push(newTask);
    return this.tasks[this.tasks.length - 1];
  }

  getTasks() {
    return [...this.tasks];
  }

  getTaskById(id) {
    const foundIndex = this.tasks.findIndex((t) => t.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }

  updateTask(id, values) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id);
    if (foundTaskIndex !== -1) {
      this.tasks[foundTaskIndex] = {
        ...this.tasks[foundTaskIndex],
        ...values,
      };
    }

    return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }

  deleteTask(id) {
    const foundTaskIndex = this.tasks.findIndex((t) => t.id === id);

    return foundTaskIndex === -1 ? null : this.tasks.splice(foundTaskIndex, 1);
  }
}

const tasksDbInstance = new TasksDB(tasksDB);

module.exports = tasksDbInstance;
