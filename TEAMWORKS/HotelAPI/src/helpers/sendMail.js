'use strict';

const nodemailer= require('nodemailer')

module.exports = function sendMail(to, subject, message){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },

    })
}