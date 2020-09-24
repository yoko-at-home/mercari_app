/**
 * サーバーの設定、ミドルウェア
 */
const express = require("express");
const app = express();
const itemMiddleware = require("./middleware/itemMiddleware");
const commonMiddleware = require("./middleware/commonMiddleware");
const itemRouter = require("./routes/itemRoutes");

// app.use(commonMiddleware.checkID);//paramを使用する場合は不要
app.use(itemMiddleware.checkItem);
app.use(express.json()); //ミドルウェア
app.use("/items", itemRouter); //ミドルウェア

module.exports = app;
