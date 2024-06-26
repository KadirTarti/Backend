"use strict"

//* EXPRESS JS ERROR MANAGEMENT


module.exports = (err, req, res, next) => {
    
        const errorStatusCode = res?.errorStatusCode || 500
        res.status(errorStatusCode).send({
            error: true,
            status: false,
            message: err.message
        })
    }

