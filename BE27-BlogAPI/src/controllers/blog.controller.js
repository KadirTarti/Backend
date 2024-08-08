"use strict";
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */

const blog = require("../models/blog.model");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "List blogs"
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

            // Sadece kendi kayıtlarını görebilir:
        // Çalışanlarımız ve Admin tük kullanıcıları görebilir
        // Şirket politikası na göre isStaff kaldırılabilir

        const data = await res.getModelList(blog)

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(blog),
      data,
    });
  },

  create: async (req, res) => {
     /*
          #swagger.tags = ["blogs"]
          #swagger.summary = "Create blog"
          #swagger.parameters['body'] = {
              in: 'body',
              required: true,
              schema: {
                  "blogname": "test",
                  "password": "1234",
                  "email": "test@site.com",
                  "firstName": "test",
                  "lastName": "test",
              }
          }
      */
           
       if (req.user?.isActive) {
           const data = await blog.create(req.body)
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
            #swagger.tags = ["blogs"]
            #swagger.summary = "Get Single blog"
        */

        const customFilters = (req.user?.isActive) ? {} : { _id: req.user._id }

        const data = await blog.findOne(customFilters)

        res.status(200).send({
            error: false,
            data
        })
  },

  update: async (req, res) => {
     /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Update blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "blogname": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */
   
        const customFilters = { _id: req.params.id }

        const data = await blog.updateOne(customFilters, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await blog.findOne(customFilters),
        })
    },

  delete: async (req, res) => {
        /*
            #swagger.tags = ["blogs"]
            #swagger.summary = "Delete blog"
        */
       console.log(req.params.id, req.blog?._id)
            if (req.params.id !== req.blog?._id) {
                const data = await blog.deleteOne({ _id: req.params.id })
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