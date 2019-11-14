const router = require("express").Router();
const Users = require("./usersModel");
const restricted = require("../../auth/restrictedMiddleware");

// @desc     Get all Users
// @route    GET /users
// @access   Private
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// Export router
module.exports = router;
