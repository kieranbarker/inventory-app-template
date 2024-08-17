const db = require("./db");
const items = require("./items.json");

db.createManyItems(items);
