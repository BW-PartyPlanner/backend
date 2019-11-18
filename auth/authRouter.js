const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("../config/secret");

const Users = require("../crudOPS/users/usersModel");

// @desc     Register a User in DB
// @route    POST /api/users
// @access   Public
router.post("/register", async (req, res) => {
  let { username, password } = req.body;

  if (!username || !password) {
    res
      .status(400)
      .json({ message: "Please include both a Username and Password" });
  } else {
    const hash = bcrypt.hashSync(password, 10);
    password = hash;

    try {
      const newUser = await Users.insert({ userName, password });
      if (newUser) {
        res.status(201).json(newUser);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
});

// @desc     Login a User in
// @route    POST /api/login
// @access   Public
router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  try {
    const user = await Users.findBy({ username }).first();

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome back ${user.first_name}!`,
        id: `User ID ${user.id}`,
        token
      });
    } else {
      res.status(401).json({
        message:
          "Sorry, the username and/or password you provided were incorrect"
      });
    }
  } catch (error) {
    res.status(500).json({ message: "There was an issue logging you in" });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;
