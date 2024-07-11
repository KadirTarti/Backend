"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

const express = require("express");
const app = express();
const morgan = require("morgan");

/* ------------------------------------------------------- */
require("dotenv").config();
const PORT = process.env.PORT || 8000;

require("express-async-errors");
/* -------------------------------------------------------------------------- */
/*                               CONFIGURATIONS                               */
/* -------------------------------------------------------------------------- */

const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();
/* -------------------------------------------------------------------------- */
/*                               MIDDLEWARES                                  */
/* -------------------------------------------------------------------------- */
app.use(express.json());
app.use(morgan("dev"));

app.use(require("./src/middlewares/findSearchSortPagi"));
/* -------------------------------------------------------------------------- */
/*                               ROUTES                                       */
/* -------------------------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send({
    message: "<h1>Welcome to the Hotel API</h1>",
    user: req.user,
  });
});

app.use("/", require("./src/routes/"));

app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Route not found!",
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log(`App running on port ${PORT}`));

/* ------------------------------------------------------- */

// require("./src/helpers/sync")();
