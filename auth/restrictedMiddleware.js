const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

module.exports = (req, res, next) => {
  const token = req.headers.authorization; //coming from request headers.authorization
  // check that token is valid
  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
      //do we need pass in the secret with the token we get from req? Isn't it already part of the token? or does it verify the secret in the token against what we have stored in server?
      if (err) {
        res.status(401).json({ you: "shall not pass" });
      } else {
        req.user = { username: decodedToken.username };
        next();
      }
    });
  } else {
    res.status(400).json({ message: "user be logged in to do that!" });
  }
};
