const router = require("express").Router();
const Items = require("./itemsModel");
const restricted = require("../../auth/restrictedMiddleware");

// //add in full crud for user just in case

// // @desc     Get all Users
// // @route    GET /api/users
// // @access   Private
// router.get("/", restricted, async (req, res) => {
//   try {
//     const users = await Users.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error, message: "Unable to get users" });
//   }
// });

// // @desc     Get a user by ID
// // @route    GET /api/users/:id
// // @access   Private
// router.get("/:id", restricted, async (req, res) => {
//   try {
//     const user = await Users.findById(req.params.id);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({
//       error,
//       message: "Unable to find this user id"
//     });
//   }
// });

// // @desc     Edit a  User
// // @route    PUT /api/users:id
// // @access   Private
// router.put("/:id", restricted, async (req, res) => {
//   try {
//     const user = await Users.update(req.params.id, req.body);
//     if (user) {
//       res.status(200).json({ message: "Info updated!" });
//     } else {
//       res.status(404).json({ message: "User could not be found!" });
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// // @desc     Delete a User
// // @route    DELETE /api/users:id
// // @access   Private
// router.delete("/:id", restricted, async (req, res) => {
//   try {
//     const count = await Users.remove(req.params.id);
//     if (count > 0) {
//       res.status(200).json({ message: "Deleted!" });
//     } else {
//       res.status(404).json({ message: "User unable to be deleted!" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error while deleting User!" });
//   }
// });

// Export router
module.exports = router;
