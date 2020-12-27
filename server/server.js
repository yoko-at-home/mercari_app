//他のファイルでも必要とする前提となる情報を盛り込んでいる
//require('dotenv').config()は次のようにもできる
const dotenv = require("dotenv");
dotenv.config();
// サーバーの指定のみを実行(package.jsonから最初に読み込まれる)
const app = require("./app");

//herokuのプラットフォーム内では、herokuのPORTを使うそうでなければ4000
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`サーバーが${port}で起動しました❤️`)
});
