"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const middlewareOne = (req, res, next) => {
    req.messageOne = 'middleware one called'
    next()
}

module.exports = middlewareOne