module.exports = (req, res, next) => {
  let { page, results } = req.query;

  page = Number(page) || 1;
  results = Number(results) || 5;

  if (page < 1) page = 1;
  if (results < 1) results = 5;

  req.pagination = { page, results };
  next();
};
