const express = require("express");
// const {
//   getItems,
//   getItem,
//   createItem,
//   updateItem,
//   deleteItem,
// } = require("../services/itemServices");
const ItemServices = require("../services/itemServices");
const CommonMiddleware = require('../middleware/commonMiddleware');
const itemRouter = express.Router(); //ルート専用のオブジェクト
itemRouter.param("id", CommonMiddleware.checkId);
// Chaining メソッドを連ねる方法
itemRouter.route("/").get(ItemServices.getItems).post(ItemServices.createItem);
// itemRouter.route("/").get(getItems).post(createItem);

itemRouter
  .route("/:id")
  .get(ItemServices.getItem)
  .patch(ItemServices.updateItem)
  .delete(ItemServices.deleteItem);
// itemRouter
//   .route("/:id")
//   .get(getItem)
//   .patch(updateItem)
//   .delete(deleteItem);

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
