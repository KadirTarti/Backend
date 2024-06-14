//*Blog Controller

const {BlogPost} = require('../models/blogModel')

module.exports.BlogPostController = {
  list: async (req, res) =>  {
    const data = await BlogPost.find()
    res.status(200).send({
        error: false,
        blogs: data,
    })
  },

  create: async (req, res) =>{
    const data = await Blogpost.create(req.body)
    res.status(201).create({
        error:false,
        blog: data,
    })
  }
} 