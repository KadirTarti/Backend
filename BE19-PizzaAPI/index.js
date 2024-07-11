"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
//* Project Starter Command
/*
    $ cp .env-sample .env
    $ npm init -y
    $ npm i express dotenv mongoose express-async-errors
    $ npm i morgan swagger-autogen swagger-ui-express redoc-express
    $ npm i nodemailer multer
    $ mkdir logs
    $ nodemon
*/
//* Use _projectStarter folder
/*
    $ cp .env-sample .env
    $ mkdir logs
    $ npm install
    $ nodemon
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json())

// Logger:
app.use(require('./src/middlewares/logging'))

// Auhentication:
app.use(require('./src/middlewares/authentication'))

//? findSearchSortPage / res.getModelList:
app.use(require('./src/middlewares/queryHandler'))


/* -------------------------------------------------------------------------- */
/*                                    Email                                   */
/* -------------------------------------------------------------------------- */

//! nodemailer
// https://nodemailer.com/
// https://ethereal.email/ (testing email)

const nodemailer = require('nodemailer');

// nodemailer.createTestAccount().then(data=> console.log(data))

/*
{
  user: 'uktkuk3eb52y7bxx@ethereal.email',
  pass: 'mnBTd7xCxsg8b6UnCQ',
  smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  web: 'https://ethereal.email',
  mxEnabled: false
}
*/

//* connect nodemailer
// const transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // Use `true` for port 465, `false` for all other ports
//     auth: {
//       user: "uktkuk3eb52y7bxx@ethereal.email",
//       pass: "mnBTd7xCxsg8b6UnCQ",
//     },
//   });

//   //* send mail
//  transporter.sendMail({
//     from: '"Abdulkadir 👻" <uktkuk3eb52y7bxx@ethereal.email>', // sender address
//     to: "tartilaci@gmail.com", // single user
//     // to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   }, (error, success) => {
//     error ? console.log(error) : console.log(success)
//   });


//* Gmail with nodemailer
const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email", gmail'de host yerine service kısmı yazılıyor
    service: "gmail",
    auth: {
      user: "tartilaci@gmail.com",
      pass: "vnui vyvn xpyj thvu",
    },
  });

  transporter.sendMail({
    // from: 'tartilaci@gmail.com',
    // to: 'tartilaci@gmail.com',
    text: '',
    subject: 'Bu bir deneme mesajıdır',
    text: 'Hello, deneme'
  }, (error, success) => console.log(success, error))


// * ---------------------------------------------------------- * //

// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to my PIZZA API (AKT)',
        docs: {
            swagger: "/documents/swagger",
            redoc: "/documents/redoc",
            json: "/documents/json",
        },
        user: req.user,
    })
})

// routes/index.js:
// app.use(require('./src/routes/'))//* default yazmadığımızda kök route u esas alır.
app.use('/', require('./src/routes/'))

//* eşleşmeyen routeları yakalar
app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Route not found!",
  });
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.