"use strict"
/* -------------------------------------------------------
        ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */
const User = require('../models/order')

/* ------------------------------------------------------- */
// create - read- update- delete isimlendirmesi şart değil. farklı başlıklar konabilir
module.exports = {
    list: async(req, res)=>{
        const data = await res.getModelList(User)
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails,
            data
        })
    },
    create: async(req, res)=>{},
    read: async(req, res)=>{},
    update: async(req, res)=>{},
    delete: async(req, res)=>{},
}