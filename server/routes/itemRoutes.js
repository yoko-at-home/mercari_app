const express = require("express");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../services/itemServices");
const itemRouter = express.Router(); //ルート専用のオブジェクト

// Chaining メソッドを連ねる方法
itemRouter.route("/").get(getItem).post(createItem);
itemRouter.route("/:id").get(getItem).patch(updateItem).delete(deleteItem);

// app.get("/items", getItems);
// app.get("/items/:id", getItem);
// app.post("/items", createItem);
// app.patch("/items/:id", updateItem);
// app.delete("/items/:id", deleteItem);

//ES Module
// export const itemRouter; //複数エキスポートする時
// export default itemRouter; //一つエクスポートする時

// // Common JS Module
// const itemRouter = function(){} //複数エキスポートする時
module.exports = itemRouter; //一つエクスポートする時
