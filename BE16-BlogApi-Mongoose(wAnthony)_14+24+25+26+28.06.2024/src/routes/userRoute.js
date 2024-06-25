const router = require("express").Router();
const UserController = require("../controllers/userController");

//! base route => /user

router.route("/").get(UserController.list).post(UserController.create);

router
  .route("/:userId")
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.delete);

router.route('/login').post(UserController.login)
router.get('logout', UserController.logout)

  module.exports = router  
