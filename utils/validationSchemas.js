const yup = require('yup');

const TEXT_VALIDATION_SCHEMA = yup.string().trim().min(3).max(100);
const DEADLINE_VALIDATION_SCHEMA = yup
  .string()
  .trim()
  .matches(/^\d{4}-\d{2}-\d{2}$/, 'Deadline must follow YYYY-MM-DD format')
  .test('isValidDate', 'Deadline must be a valid future date', (value) => {
    const parsedDate = new Date(value);
    return !isNaN(parsedDate.getTime()) && parsedDate >= new Date();
  });
const ISDONE_VALIDATION_SCHEMA = yup.boolean();

module.exports.ADD_TASK_VALIDATION_SCHEMA = yup.object({
  text: TEXT_VALIDATION_SCHEMA.required(),
  deadline: DEADLINE_VALIDATION_SCHEMA.required(),
  isDone: ISDONE_VALIDATION_SCHEMA.oneOf(
    [false],
    'New tasks cannot be marked as done'
  ),
});

module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  text: TEXT_VALIDATION_SCHEMA.nullable(),
  deadline: DEADLINE_VALIDATION_SCHEMA.nullable(),
  isDone: ISDONE_VALIDATION_SCHEMA.nullable(),
});
