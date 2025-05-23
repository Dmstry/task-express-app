const {
  ADD_TASK_VALIDATION_SCHEMA,
  UPDATE_TASK_VALIDATION_SCHEMA,
} = require('../utils/validationSchemas');

module.exports.validateTaskOnAdd = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await ADD_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports.validateTaskOnUpdate = async (req, res, next) => {
  const { body } = req;

  try {
    const validatedTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
    req.body = validatedTask;
    next();
  } catch (err) {
    next(err);
  }
};
