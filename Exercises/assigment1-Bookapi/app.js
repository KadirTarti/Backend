"use strict";
const express = require("express");
require('express-async-errors')

const app = express();

app.use(express.json())


app.all("/", (req, res) => {
  res.send("Book APP");
});

// // ROUTER
// app.use(require('./src/routers/contactRouter'))

// // errorHandler rootların bittiği yerde  tanımlanmalı
// app.use(require('./src/middlewares/errorHandler'))

app.listen(8000, () => console.log(`server runned http://localhost:8000`));



