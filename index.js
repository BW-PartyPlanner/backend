const server = require("./server.js");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

////setting up environmental variables////
dotenv.config({ path: "./config/config.env" });

if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`.cyan);
});
