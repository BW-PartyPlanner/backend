const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const colors = require("colors");

//////    import Router files    //////
const authRouter = require("./auth/authRouter");
const usersRouter = require("./crudOPS/users/usersRouter");
const partiesRouter = require("./crudOPS/parties/partiesRouter");
const itemsRouter = require("./crudOPS/items/itemsRouter");
const imagesRouter = require("./crudOPS/images/imagesRouter");

const server = express();

server.use(express.json(), helmet(), cors());

//  pass this in cors if having bad cors issues

// {
//   origin: true,
//   credentials: true
// }

//////    Use routers    ///////
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/parties", partiesRouter);
server.use("/api/items", itemsRouter);
server.use("/api/images", imagesRouter);

//testing that the server works
server.get("/", (req, res) => {
  res.send("The Party Planner server is running!!");
});

module.exports = server;
