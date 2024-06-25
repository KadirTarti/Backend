"use strict";
const router = require("express").Router();
const book = require("../controllers/bookController");

router.route("/books").get(book.list).post(book.create);

router
  .route("/books/:id")
  .get(book.get)
  .put(book.update)
  .patch(book.update)
  .delete(book.delete);

// app.use(router)
module.exports = router;
