const express = require("express");
// const app = express.Router();
const index = require("./view/index.ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(5000);
