"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |  FlightApi | Abdulkadir TARTILACI
------------------------------------------------------- */
// app.use(errorHandler):


module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    error: true,
    message: err.message,
  });
};