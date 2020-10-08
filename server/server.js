// サーバーの指定のみを実行(package.jsonから最初に読み込まれる)
const app = require("./app");
const port = 4000;

app.listen(port, () => {
  console.log("ポート4000が開きました");
});
