const express = require("express"); //commonJS Module node.js v12まではこっち

const app = express(); //
const fs = require("fs");
// const { tempItems } = require("../client/src/data/items");
const port = 4000;

const buffer = fs.readFileSync("data.json");
const { items } = JSON.parse(buffer);
// console.log("data", data);

app.get("/items", (req, res) => {
  res.status(200).json({
    status: "success",
    data: items,
  });
  // res.status(404).json({
  //   status: "fail",
  //   data: items,
  // });
});

app.get("/items/:id", (req, res) => {
  const { id } = req.params;
  const numberID = parseInt(id);
  if (numberID > items.length || numberID <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの数字が大きすぎます",
    });
  }
  const result = items.find((item) => {
    return numberID === item.id;
  });
  if (!result) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDは存在しませんでした",
    });
  }
  // console.log("id", id);
  res.status(200).json({
    status: "success",
    data: result,
  });
});

app.post("/item", (req, res) => {});

// app.get('/item',());

app.listen(port, () => {
  console.log("ポート4000が開きました");
});

//
// app.put('./items')
// app.delete('./items')
