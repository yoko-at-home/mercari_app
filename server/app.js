/**
 * サーバーの設定、ミドルウェア
 */
const express = require("express");
const cors = require("cors");
const itemMiddleware = require("./middleware/itemMiddleware");
/*const commonMiddleware = require("./middleware/commonMiddleware");*/
const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

// app.use(commonMiddleware.checkID);//paramを使用する場合は不要
app.use(cors()); //空の時は全て受け入れる
app.use(itemMiddleware.checkItem);
app.use(express.json()); //ミドルウェア
app.use("/items", itemRouter); //ミドルウェア
app.use("/users", userRouter);

module.exports = app;
