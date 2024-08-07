"use strict";
/* -------------------------------------------------------
    AKT - BlogApi
------------------------------------------------------- */

const Comment = require("../models/comment.model");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["comments"]
            #swagger.summary = "List comments"
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

    const data = await res.getModelList(Comment);

    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Comment),
      data,
    });
  },

  create: async (req, res) => {
    /*
          #swagger.tags = ["comments"]
          #swagger.summary = "Create comment"
          #swagger.parameters['body'] = {
              in: 'body',
              required: true,
              schema: {
                "blogId": "65343222b67e9681f937f201",
                "comment": "Comment 1"
                }
      */

    if (req.user.isActive) {
        req.body.userId = req.user.id
      const data = await Comment.create(req.body);
      res.status(201).send({
        error: false,
        data,
      });
    } else {
      res.errorStatusCode = 403;
      throw new Error("No permission. You must login!");
    }
  },

  read: async (req, res) => {
    /*
            #swagger.tags = ["comments"]
            #swagger.summary = "Get Single comment"
        */

    const customFilters = req.user?.isActive ? {} : { id: req.user.id };

    const data = await Comment.findOne(customFilters);

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    /*
            #swagger.tags = ["comments"]
            #swagger.summary = "Update comment"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
   schema: {
                "blogId": "65343222b67e9681f937f201",
                "comment": "Comment 1"
                }
            }
        */

    const customFilters = { _id: req.params.id };

    const data = await Comment.updateOne(customFilters, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Comment.findOne(customFilters),
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.tags = ["Comments"]
            #swagger.summary = "Delete Comment"
        */
    if (req.params.id !== req.comment._id) {
      const data = await Comment.deleteOne({ _id: req.params.id });
      const count = data?.deletedCount ?? 0;

      console.log("delete >> ", count);
      res.status(count > 0 ? 204 : 404).send({
        error: count !== 0,
        data,
      });
    } else {
      // Admin kendini silemez.
      res.errorStatusCode = 403;
      throw new Error("You can not remove your account.");
    }
  },
};
