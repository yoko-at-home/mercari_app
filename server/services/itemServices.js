const fs = require("fs");
const buffer = fs.readFileSync("data.json");
const { items } = JSON.parse(buffer);

exports.getItems = (req, res) => {
  res.status(200).json({
    status: "success",
    data: items,
  });
};

exports.getItem = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  const result = items.find((item) => {
    return numberId === item.id;
  });
  if (!result) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDは存在しませんでした",
    });
  }
  res.status(200).json({
    status: "success",
    data: result,
  });
};

exports.createItem = (req, res) => {
  const newId = items.length + 1;
  const newItem = Object.assign({}, { id: newId }, req.body);
  items.push(newItem);
  fs.writeFileSync("data.json", JSON.stringify({ items: items }));
  res.status(200).json({
    status: "success",
    data: items,
  });
};

exports.updateItem = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;
  const numberId = parseInt(id);
  if (numberId > items.length || numberId <= 0) {
    res.status(404).json({
      status: "fail",
      message: "指定されたIDの値が大きすぎます",
    });
  }
  res.status(200).json({
    status: "success",
  });
};
