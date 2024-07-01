"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require('../models/department.model')

module.exports = {
    list:async(req, res)=> {
        // const departments = await res.getModelList (Department)
        const data = await res.getModelList (Department)
        res.status(200).send({
            error:false,
            detail: await res.getModelListDetails(Department),
           // departments
            data
        })
    },

    create:async(req, res)=> {
        const data = await Department.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },
    
    read:async(req, res)=> {
        const data = await Department.findById(req.params.id)
        res.status(200).send({
            error:false,
            data
        })
    },
    update:async(req, res)=> {},
    delete:async(req, res)=> {},
}