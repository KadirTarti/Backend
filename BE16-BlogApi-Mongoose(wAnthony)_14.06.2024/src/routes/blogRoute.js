//* Blog Route

const router = require("express").Router();

const { BlogPostController } = require("../controllers/blogController");

router
  .route("/post")
  .get(BlogPostController.list)
  .post(BlogPostController.create);
router
  .route("/post/:id")
  .get(BlogPostController.read)
  .put(BlogPostController.update)
  .delete(BlogPostController.delete)


router.route("/post/createMany").post(BlogPostController.createMany);

module.exports = router;