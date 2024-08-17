const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const db = new Database(path.join(__dirname, "..", "inventory.db"));

const schema = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf-8");
db.exec(schema);

const createOneItem = db.prepare(
  `INSERT INTO items (name, description, price, category, image)
  VALUES (:name, :description, :price, :category, :image)`,
);

const createManyItems = db.transaction((items) => {
  for (const item of items) {
    createOneItem.run(item);
  }
});

const getItems = db.prepare("SELECT * FROM items");

// const getOneItem = db.prepare();
// const updateOneItem = db.prepare();
// const deleteOneItem = db.prepare();

module.exports = {
  createOneItem,
  createManyItems,
  getItems,
  // getOneItem,
  // updateOneItem,
  // deleteOneItem,
};
