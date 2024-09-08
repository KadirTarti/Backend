"use strict";
require("express-async-errors");
const express = require("express");

require('dotenv').config()

const { mongooseConnection } = require("./startup/mongooseConnection");


const PORT = process.env?.PORT || 8000;

const cors = require('cors')

const app = express();
app.use(express.json());

//! cors
app.use(cors())  // tüm istemci url lerine ve http metodlarına izin verir (her yerden ulaşılır)
// app.use(cors({
//   origin: "http://localhost:3000", //* sondaki slash veya path olmayacak. sade-original
//   methods: "GET, HEAD, PUT, PATCH, POST, DELETE", 
//   preflightContinue: false,
//   optionsSuccessStatus: 204,

// }))


app.all("/", (req, res) => {
  res.send("Hello TutorialApp");
});

app.use('/tutorials', require('./routes/tutorialRoute'))

app.use(require('./middlewares/errorHandler'))

mongooseConnection()

app.listen(PORT, () => console.log("Listening http://127.0.0.1:" + PORT));