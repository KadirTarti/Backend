"use strict";
const sendMail = require("../helpers/sendMail");
/* -------------------------------------------------------
    EXPRESS - HOTEL API
------------------------------------------------------- */

const User = require("../models/userModel");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
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
    const users = await res.getModelList(User);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails,
      results: users.length,
      users,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
        */
    const newUser = await User.create(req.body);

    sendMail(
      newUser.email,
      "Welcome to the HOTEL!",
      `Welcome, ${(newUser, req.body.username)}`
    );
    
    res.status(201).send({
      error: false,
      newUser,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
        */
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.send({
      error: false,
      user,
      updatedUser: await User.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(user.deletedCount ? 204 : 404).send({
      error: !user.deletedCount,
      user,
      message: "User not found!",
    });
  },
};
