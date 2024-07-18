"use strict";
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */
const Token = require("../models/tokenModel");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "List Tokens"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const tokens = await res.getModelList(Token);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Token),
      results: tokens.length,
      tokens,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Create Token"
        */
    const newToken = await Token.create(req.body);
    res.status(201).send({
      error: false,
      newToken,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Update Token"
        */
    const token = await Token.findById(req.params.id);
    res.status(200).send({
      error: false,
      token,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Delete Token"
        */
    const token = await Token.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      token,
      updatedToken: await Token.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Tokens"]
            #swagger.summary = "Delete Token"
        */
    const token = await Token.deleteOne({ _id: req.params.id });
    res.status(token.deletedCount > 0 ? 204 : 404).send({
      error: !token.deletedCount,
      token,
    });
  },
};
