//*Blog Controller
const { BlogPost } = require("../models/blogModel");

module.exports.BlogPostController = {
  list: async (req, res) => {
    const data = await BlogPost.find({published: true});  // published true olanları getir!

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      blog: data,
    });
  },

  read:  async (req, res) => {
    const data = await BlogPost.findById(req.params.id);  

    res.status(200).send({
      error: false,
      blog: data,
    });
  },

  update: async (req, res) => {
    // const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body); //! database'de günceller ama ui da eski veri görünür. onun da güncellenmesi için aşağıdaki gibi true eklenmeli:
    const data = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {new:true});

    res.status(202).send({
      error: false,
      blog: data,
    });
  },
};
