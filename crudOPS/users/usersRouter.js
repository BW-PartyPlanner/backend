const router = require("express").Router();

// Import data model
const Users = require("./usersModel");
const restricted = require("../../auth/restrictedMiddleware");

// Write CRUD operations

// @desc     Get all Users
// @route    GET /users
// @access   Private
router.get("/users", restricted, (req, res) => {
  Users.find()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => res.send(err));
});

// @desc     Get single user
// @route    GET /users:id
// @access   Private

// @desc     Post single user
// @route    POST /users
// @access   Private

// @desc     Update single user
// @route    PUT /users:id
// @access   Private

// @desc     Delete single user
// @route    DELETE /users:id
// @access   Private

// Export router
module.exports = router;
