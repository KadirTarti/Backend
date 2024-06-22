// BookPost Controller

require("express-async-errors");


const Book = require('../models/bookModel')


module.exports = {
  create: async (req, res) => {
    const data = await Book.create(req.body);

    res.status(201).send({
      error: false,
      books: data,
    });
  },
  list: async (req,res)=>{

    const data=  await Book.findAndCountAll()
    //res.sendStatus(200)
    res.status(200).send({
        error:false,
        books:data    
    })
  },
  read: async (req, res) => {
    const data = await Book.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      books: data,
    });
  },
  update: async (req, res) => {
    const data = await Book.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      books: data,
      newData: await Book.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data=  await Book.destroy({where:{id:req.params.id}})
        if(data==1) {          
                res.status(201).send({
                    error:false,
                    data
                })
        } else {
            res.status(404)
            throw new Error('Not found Book to delete')
        }
  },
};
