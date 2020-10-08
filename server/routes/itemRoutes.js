const express = require("express");

const ItemServices = require("../services/itemServices");
const CommonMiddleware = require("../middleware/commonMiddleware");
const itemRouter = express.Router();
// まず、IDをチェックして次に流れて行ってねというための構文（ここではidがあるかどうかをチェックしている）
itemRouter.param("id", CommonMiddleware.checkId);

itemRouter
  .route("/") //default app.jsの「app.use("/items", itemRouter);」が起点
  .get(ItemServices.getItems)
  .post(ItemServices.createItem); //暗号化したデータが渡される

itemRouter
  .route("/:id") //パラメータ
  .get(ItemServices.getItem)
  .patch(ItemServices.updateItem)
  .delete(ItemServices.deleteItem);

module.exports = itemRouter;
