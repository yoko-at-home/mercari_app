const express = require("express");

const ItemServices = require("../services/itemServices");
const ItemsMiddleware = require("../middleware/itemMiddeware");
const CommonMiddleware = require("../middleware/commonMiddleware");
const itemRouter = express.Router();
// まず、IDをチェックして次に流れて行ってねというための構文（ここではidがあるかどうかをチェックしている）
// itemRouter.param('id', CommonMiddleware.checkId);
// const randomMiddleware = (req, res, next) => {
//   next();
// }

itemRouter
  .route("/") //default app.jsの「app.use("/items", itemRouter);」が起点
  .get(ItemServices.getItems)
  .post(ItemsMiddleware.checkItem, ItemServices.createItem); //暗号化したデータが渡される

itemRouter
  .route("/:id") //パラメータ
  .get(CommonMiddleware.checkId, ItemServices.getItem)
  .patch(CommonMiddleware.checkId, ItemServices.updateItem)
  .delete(CommonMiddleware.checkId, ItemServices.deleteItem);

module.exports = itemRouter;
