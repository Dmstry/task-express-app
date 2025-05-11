const yup = require('yup');

const ADD_TASK_VALIDATION_SCHEMA = yup.object({
  text: yup.string().trim().min(3).max(100).required(),
  deadline: yup
    .string()
    .trim()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Deadline must follow YYYY-MM-DD format')
    .test('isValidDate', 'Deadline must be a valid future date', (value) => {
      const parsedDate = new Date(value);
      return !isNaN(parsedDate.getTime()) && parsedDate >= new Date();
    })
    .required(),
  isDone: yup.boolean().oneOf([false], 'New tasks cannot be marked as done'),
});

const UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  text: yup.string().trim().min(3).max(100).nullable(),
  deadline: yup
    .string()
    .trim()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Deadline must follow YYYY-MM-DD format')
    .test('isValidDate', 'Deadline must be a valid future date', (value) => {
      const parsedDate = new Date(value);
      return !isNaN(parsedDate.getTime()) && parsedDate >= new Date();
    })
    .nullable(),
  isDone: yup.boolean().nullable(),
});

module.exports.validateTaskOnAdd = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await ADD_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    res.status(422).send('Validation Error');
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    res.status(422).send('Validation Error');
  }
};
