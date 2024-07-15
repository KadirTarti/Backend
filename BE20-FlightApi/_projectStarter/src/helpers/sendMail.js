"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

const nodemailer = require("nodemailer");

module.exports = function (to,subject,message){
  //* GoogleMail (gmail)
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  transporter.sendMail(
    {
      to: to,
      subject: subject, // Subject line
      html: message, // html body
    },
    (error, success) => console.log(success, error)
  );
}