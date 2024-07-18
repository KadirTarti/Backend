'use strict';

const nodemailer= require('nodemailer')

module.exports = function sendMail(to, subject, message){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        html: message,
    };

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error) {
            console.log(error)
        } else {
            console.log(info.response)
        }
    })
}