const express = require("express");
const app = express();

const port = 4000;
const itemRouter = require("./routes/itemRoutes");

app.use(express.json());
app.use("/items", itemRouter);

app.listen(port, () => {
  console.log("ポート4000が開きました");
});
