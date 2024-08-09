"use strict";
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */

const Category = require("../models/category.model");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "List Categories"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(Category)

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Category),
      data,
    });
  },

  create: async (req, res) => {
     /*
          #swagger.tags = ["Categories"]
          #swagger.summary = "Create Category"
          #swagger.parameters['body'] = {
              in: 'body',
              required: true,
              schema: {
                "name": "Category 1"
                    }
          }
      */
           
       if (req.user?.isActive) {
           const data = await Category.create(req.body)
           res.status(201).send({
             error: false,
             data
           });
       } else {
        res.errorStatusCode = 403
        throw new Error('No permission. You must login!')
       }
 
    
      },

  read: async (req, res) => {
      /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Get Single Category"
        */

        const customFilters = (req.user?.isActive) ? {} : { _id: req.user._id }

        const data = await Category.findOne(customFilters)

        res.status(200).send({
            error: false,
            data
        })
  },

  update: async (req, res) => {
     /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Update Category"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Category 1"
                }
            }
        */
   
            

        const data = await Category.updateOne(customFilters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Category.findOne(customFilters),
        })
    },

  delete: async (req, res) => {
        /*
            #swagger.tags = ["Categories"]
            #swagger.summary = "Delete Category"
        */
       console.log(req.params.id, req.Category?._id)
            if (req.params.id !== req.Category?._id) {
                const data = await Category.deleteOne({ _id: req.params.id })
                const count = data?.deletedCount ?? 0
    
                console.log('delete >> ', count);
                res.status(count > 0 ? 204 : 404).send({
                    error: count !== 0,
                    data
                })
            } else {
                // Admin kendini silemez.
                res.errorStatusCode = 403
                throw new Error('You can not remove your account.')
            }
        }
    }