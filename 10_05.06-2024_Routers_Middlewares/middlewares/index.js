"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const middlewareOne = (req, res, next) => {
    req.messageOne = 'middleware one called'
    next()
}

const middlewareTwo = (req, res, next) => {
    req.messageTwo = 'middleware two called'
    next()
}

module.exports = {middlewareOne, middlewareTwo}