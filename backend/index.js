const { userrouter } = require("./routes/user.router");
const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();
const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/users", userrouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(" SuccessFull Connected with database");
  } catch (err) {
    console.log("Problem connecting with database");
    console.log(err);
  }
});
