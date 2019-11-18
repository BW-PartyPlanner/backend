const router = require("express").Router();
const Users = require("./usersModel");
const restricted = require("../../auth/restrictedMiddleware");

//add in full crud for user just in case

// @desc     Get all Users
// @route    GET /api/users
// @access   Private
router.get("/", restricted, async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error, message: "Unable to get users" });
  }
});

// @desc     Get a user by ID
// @route    GET /api/users/:id
// @access   Private
router.get("/:id", restricted, async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      error,
      message: "Unable to find this user id"
    });
  }
});

// Export router
module.exports = router;
