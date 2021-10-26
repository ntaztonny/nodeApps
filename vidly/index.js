//npm modules
const mongoose = require("mongoose");
const config = require("config");
const express = require("express");
const app = express();

//inprogram modules
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const users = require("./routes/user");
const auth = require("./routes/auth");

if (!config.get("jwtPrivateKey")) {
  console.log("JSON web token fatal error! JWT isn't defined");
  process.exit(1);
}

console.log(config.get("jwtPrivateKey"));

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/users", users);
app.use("/api/auth", auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
