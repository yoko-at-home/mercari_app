/**
 * サーバーの設定、ミドルウェア
 */
const express = require("express");
const cors = require("cors");
const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

// サーバー側を立ち上げてexpressでは受信を拒否する（limiterを解除してくれる）
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use("/items", itemRouter);
app.use("/users", userRouter);
module.exports = app;

// app.use(cors({
// origin: "http://localhost:3000";
// }));
