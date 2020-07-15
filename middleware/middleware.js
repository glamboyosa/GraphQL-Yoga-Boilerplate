module.exports = (req, res, next) => {
  console.log('Demo express middleware', req.originalUrl);
  next();
};
