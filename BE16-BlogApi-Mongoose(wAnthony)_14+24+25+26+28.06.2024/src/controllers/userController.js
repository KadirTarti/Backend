const User = require("../models/user.model");

module.exports = {
  list: async (req, res) => {
    const data = await User.find().select("-password");
    res.status(200).send({
      error: false,
      users: data,
    });
  },
  create: async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "User created succesfully!",
      user,
    });
  },
  read: async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);
    res.status(202).send({
        error:false,
        message:"User updated successfully!",
        result : data,
        user: await User.findOne({ _id: req.params.userId })
    })
  },
  delete: async (req,res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    if(data.deletedCount) {
      res.sendStatus(204)
    }else {
      res.status(404).send({
        error:true,
        message: "User not found!"
      })
    }
  }
};
