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

  //*Send Mail
  // transporter.sendMail({
  //   from: '"Anthony Harold 👻" <zbzbtrkybv5t24wm@ethereal.email>', // sender address
  //   to: "devfss99@gmail.com", // single user
  // //   to: "bar@example.com, baz@example.com", // list of receivers
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
      user: "devfs99@gmail.com",
      pass: "hmqp yjwy oloo pdjd",
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
      // from:"devfs99@gmail.com",
      to: to,
      subject: subject, // Subject line
    //   text: message, // plain text body
      html: message, // html body
    },
    (error, success) => console.log(success, error)
  );
}