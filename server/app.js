const express = require("express");
const db = require("./db/db");

const app = express();
app.use(express.json());

app.get("/items", (req, res) => {
  const items = db.getItems.all();
  res.status(200).json(items);
});

app.post("/items", (req, res) => {
  // Create one item
});

app.get("/items/:id", (req, res) => {
  // Get one item
});

app.patch("/items/:id", (req, res) => {
  // Update one item
});

app.delete("/items/:id", (req, res) => {
  // Delete one item
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
