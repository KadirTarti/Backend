const {BlogPost,BlogCategory} = require("../models/blogModel")

module.exports = async () => {

    const blogCategory = await BlogCategory.findOne()
    console.log(blogCategory._id)
    if(blogCategory) {
      await BlogPost.updateMany(
          {
            blogCategoryId: { $exists: false }, // blogCategoryId alanı olmayanları getir ve onlara blogCategoryId ataması yap
          },
          {
            blogCategoryId: blogCategory._id,
          }
        );
    }
    console.log("**Synchronized!**")
}