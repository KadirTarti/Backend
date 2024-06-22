// BookPost Controller

require("express-async-errors");

const { BookPost } = require("../models/bookModel");

module.exports.BookPostController = {
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      blogs: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      blogs: data,
      newData: await BookPost.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await BookPost.deleteOne({ _id: req.params.id });
    console.log(data);
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "Book post can not found",
      });
    }
  },
};
