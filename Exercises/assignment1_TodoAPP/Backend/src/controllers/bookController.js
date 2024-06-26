// BookPost Controller

require("express-async-errors");
const { BookPost} = require('../models/bookModel')


module.exports.BookPostController = {
  create: async (req, res) => {
    const data = await BookPost.create(req.body);

    res.status(201).send({
      error: false,
      book: data,
    });
  },
  list: async (req,res)=>{

    const data=  await BookPost.find()
    //res.sendStatus(200)
    res.status(200).send({
        error:false,
        post:data    
    })
  },
  read: async (req, res) => {
    const data = await Book.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      post: data,
    });
  },
  search: async (req, res) => {
    const query = {};
    if(req.query.q) {
      const searchBook = {$regex: req.query.q,
        $options: 'i'};
        query.$or= [
          {title: searchBook},
          {author: searchBook},
          {genre: searchBook},
        ];
      }
      const data = await BookPost.find(quer)
      res.status(200).send({
        error: false,
        query: req.query,
        post: data,
      });
  },

  update: async (req, res) => {
    const data = await Book.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true} );

    res.status(202).send({
      error: false,
      post: data,
      // newData: await Book.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data=  await BookPost.deleteOne({_id:req.params.id})
        if(data.deletedCount) {
          res.sendStatus(204)          
        } else {
            res.status(404).send({
              error:false,
              message: 'Book do not found'
          })
            throw new Error('Not found Book to delete')
        }
  },
  deleteMany: async (req, res) => {
    // const data = await BookPost.deleteMany()
    const data = await BookPost.deleteMany({ genre: "Horror" })
    if (data.deletedCount) {
        res.status(200).send({
            error: false,
            message: "All Book have been successfully deleted"
        })
    } else {
        res.status(404).send({
            error: false,
            message: "There are no Books."
        })
    }
}
};
