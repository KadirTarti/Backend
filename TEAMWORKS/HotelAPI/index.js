"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

const express = require("express");
const morgan = require("morgan");
const app = express();

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

app.use(require("./src/middlewares/findSearchSortPagi"));

app.use(require("./src/middlewares/authentication"));

app.use(require("./src/middlewares/logging"));
app.use(morgan("dev"));

/* -------------------------------------------------------------------------- */
/*                               ROUTES                                       */
/* -------------------------------------------------------------------------- */

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to HOTEL API",
    docs: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// console.log("668a947fda3efd683614df26" + Date.now());

app.use('/uploads', express.static('./uploads'))

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
app.listen(PORT, () => console.log(`App running on http://127.0.0.1:${PORT}`));

/* ------------------------------------------------------- */

// require("./src/helpers/sync")();
