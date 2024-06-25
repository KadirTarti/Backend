"use strict";
const router = require("express").Router();
const book = require("../controllers/bookController");

router.route("/books").get(contact.list).post(contact.create);

router
  .route("/books/:id")
  .get(contact.get)
  .put(contact.update)
  .patch(contact.update)
  .delete(contact.delete);

// app.use(router)
module.exports = router;
