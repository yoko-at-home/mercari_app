const app = require("./app"); //拡張子省ける
const port = 4000;

app.listen(port, () => {
  console.log("ポート4000が開きました");
});
