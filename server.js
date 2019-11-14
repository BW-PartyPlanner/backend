const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const colors = require("colors");

//////    import Router files    //////
const authRouter = require("./auth/authRouter");
const usersRouter = require("./crudOPS/users/usersRouter");
const partiesRouter = require("./crudOPS/parties/partiesRouter");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

//////    Use routers    ///////
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/parties", partiesRouter);

// server.use("put base url here", putRouteHere);
// server.use("put base url here", putRouteHere);
// server.use("put base url here", putRouteHere);

//testing that the server works
server.get("/", (req, res) => {
  res.send("The Party Planner server is running!!");
});

module.exports = server;
