module.exports = (req, res, next) => {
  if (!req.body.user_id) {
    res.status(400).json({ message: "user_id is required" });
  } else {
    next();
  }
};
