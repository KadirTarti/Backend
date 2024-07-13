"use strict"
/* -------------------------------------------------------
        ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */

const nodemailer = require("nodemailer");

module.exports = function (to,subject,message){
  // {
  //   user: 'zbzbtrkybv5t24wm@ethereal.email',
  //   pass: 'jEYA9g4kdzt5RUK96t',
  //   smtp: { host: 'smtp.ethereal.email', port: 587, secure: false },
  //   imap: { host: 'imap.ethereal.email', port: 993, secure: true },
  //   pop3: { host: 'pop3.ethereal.email', port: 995, secure: true },
  //   web: 'https://ethereal.email',
  //   mxEnabled: false
  // }

  //* Connect Nodemailer
  // const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // Use `true` for port 465, `false` for all other ports => ssl/tls
  //   auth: {
  //     user: "zbzbtrkybv5t24wm@ethereal.email",
  //     pass: "jEYA9g4kdzt5RUK96t",
  //   },
  // });

  //SenMail
  // transporter.sendMail({
  //   from: '"Anthony Harold 👻" <zbzbtrkybv5t24wm@ethereal.email>', // sender address
  //   to: "devfss99@gmail.com", // single user
  //   to: "bar@example.com, baz@example.com", // list of receivers
  //   subject: "Hello ✔", // Subject line
  //   text: "Hello world?", // plain text body
  //   html: "<b>Hello world?</b>", // html body
  // },(error,success)=>{
  //     error ? console.log(error) : console.log(success)
  // });

  //* GoogleMail (gmail)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //   user: "tartilaci@gmail.com",
      user: process.env.EMAIL_USER,
      //   pass: "vnui vyvn xpyj thvu",
      pass: process.env.EMAIL_PASS,
    },
  });

  // //? YandexMail (yandex):
  // const transporter = nodemailer.createTransport({
  //     service: 'Yandex',
  //     auth: {
  //         user: 'username@yandex.com',
  //         pass: 'password' // your emailPassword
  //     }
  // })

  transporter.sendMail(
    {
      // from:"tartilaci@gmail.com",
      to: to, //^fonksiyondan geliyor
      subject: subject, // Subject line   //^fonksiyondan geliyor
    //   text: message, // plain text body
      html: message, // html body
    },
    (error, success) => console.log(success, error)
  );
}