const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const categories = require("./data/category/category.json");

app.get("/", (req, res) => {
  res.send("Travel Guru server is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const singleCategory = categories.find((ct) => ct.id === id);
  res.send(singleCategory);
});

app.listen(port, () => {
  console.log("Travel guru server running on port", port);
});
