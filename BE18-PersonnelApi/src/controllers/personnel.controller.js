"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */


const Personnel = require('../models/personnel.model')

module.exports = {
    list:async(req, res)=> {
        // const personnels = await res.getModelList (personnel)
        const data = await res.getModelList(Personnel)
        res.status(200).send({
            error:false,
            detail: await res.getModelListDetails(personnel),
           // personnels
            data
        })
    },

    create:async(req, res)=> {
        const isLead  = req.body?.isLead ||false,
        if(isLead) {
            await Personnel.updateMany({
                departmentId:req.nody.departmentId, isLead:true
            }, {isLead:false})
        }
        const data =     await Personnel.create(req.body)
        res.status(201).send({
            error:false,
            data
        })
    },

    read:async(req, res)=> {
        const data = await Personnel.findById({_id: req.params.id})
        res.status(200).send({
            error:false,
            data
        })
    },

    update:async(req, res)=> {
        const data = await Personnel.updateOne({_id: req.paramsid}, req.body, {
            runValidators: true
        });
        res.status(202).send({
            error: false,
            data,
            newData: await Personnel.findOne({ _id: req.params.id})
        })
    },

    delete:async(req, res)=> {
        const data = await Personnel.deleteOne ({_id: rq.params.id})
        res.status(data.deletedCount > 0 ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },
}