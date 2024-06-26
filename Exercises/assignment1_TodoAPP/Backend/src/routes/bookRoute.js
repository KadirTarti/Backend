//* Book Route

const router = require("express").Router()

const { BookPostController } = require("../controllers/bookController")

router
    .route("/")
    .get(BookPostController.list)

router
    .get("/search", BookPostController.search)

router
    .route("/post")
    .post(BookPostController.create)

router
    .route("/post/many")
    .delete(BookPostController.deleteMany)

router
    .route("/post/:id")
    .get(BookPostController.read)
    .put(BookPostController.update)
    .delete(BookPostController.delete)



module.exports = router;
