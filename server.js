const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const colors = require("colors");

//////    import Router files    //////
// const routerNameHere = require('./path ');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//////    Use routers    ///////
// server.use("put base url here", putRouteHere);

server.get("/", (req, res) => {
  res.send("The Party Planner server is running!!");
});

module.exports = server;
