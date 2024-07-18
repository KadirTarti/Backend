"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require("mongoose");

const dbConnection = function () {
  // Connect:
  mongoose
    .connect('mongodb://127.0.0.1:27017/hotelAPI')
    .then(() => console.log("* DB Connected * "))
    .catch((err) => console.log("* DB Not Connected * ", err));
};

/* ------------------------------------------------------- */
module.exports = {
  mongoose,
  dbConnection,
};
