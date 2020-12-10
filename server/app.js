/**
 * サーバーの設定、ミドルウェア
 */
const express = require("express");
const cors = require("cors");
const itemRouter = require("./routes/itemRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

// サーバー側を立ち上げてexpressでは受信を拒否する（limiterを解除してくれる）
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
console.log("!!!");
app.use(express.json()); // for parsing application/json

if (!process.env.JWT_ACCESS_TOKEN) {
  console.error('環境変数が読み込まれませんでした')
  process.exit(1) //serverを強制的に落とす
}
app.use('/api/items', itemRouter)
app.use('/api/users', userRouter)
module.exports = app;

// app.use(cors({
// origin: "http://localhost:3000";
// }));
