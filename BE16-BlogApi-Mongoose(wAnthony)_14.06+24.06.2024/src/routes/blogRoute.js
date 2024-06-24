//* Blog Route

const router = require("express").Router();

const { BlogPostController } = require("../controllers/blogController");

router
  .route("/post")
  .get(BlogPostController.list)
  .post(BlogPostController.create);
router
  .route("/post/many")
  .post(BlogPostController.createMany)
  .delete(BlogPostController.deleteMany);  
router
  .route("/post/:id")
  .get(BlogPostController.read)
  .put(BlogPostController.update)
  .delete(BlogPostController.delete);



module.exports = router;
